import {Component, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {Menuitem} from "../../models/menuitem";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MenuService} from "../../services/menu.service";
import {NavigationEnd, Router} from "@angular/router";
import {filter, Subscription} from "rxjs";

@Component({
  selector: '[app-menuitem]',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss'],
  animations: [
    trigger('children', [
      state('void', style({
        height: '0px'
      })),
      state('hiddenAnimated', style({
        height: '0px'
      })),
      state('visibleAnimated', style({
        height: '*'
      })),
      transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('void => visibleAnimated, visibleAnimated => void',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class MenuitemComponent implements OnInit, OnDestroy {

  menuResetSub: Subscription;
  menuStateChangedSub: Subscription;

  @Input() item: Menuitem;

  @Input() index!: number;

  @Input() parentKey!: string;

  @Input() root!: boolean;

  key: string = "";
  active: boolean = false;

  constructor(public router: Router, private menuService: MenuService) {

    this.menuStateChangedSub = this.menuService.menuStateChanged$.subscribe(value => {
      if (value.routeEvent) {
        this.active = (value.key === this.key || value.key.startsWith(this.key + '-')) ? true : false;
      } else {
        if (value.key !== this.key && !value.key.startsWith(this.key + '-')) {
          this.active = false;
        }
      }
    })

    this.menuResetSub = this.menuService.resetSource$.subscribe(() => {
      this.active = false;
    })

    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(params => {
        if (this.item.routerLink) {
          this.updateActiveStateFromRoute();
        } else {
          this.active = false;
        }
      });

    this.item = {
      title: "",
      routerLink: ""
    };
  }

  ngOnInit(): void {
    this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
  }

  @HostBinding('class.active-menuitem')
  get activeClass() {
    return this.active;
  }

  get submenuAnimation() {
    return this.root ? 'expanded' : (this.active ? 'expanded' : 'collapsed');
  }

 async updateActiveStateFromRoute() {
    let activeRoute = this.router.isActive(this.item.routerLink, true)

    if (activeRoute) {
      this.menuService.onMenuStateChanged({ key: this.key, routeEvent: true });
    }
  }

  itemClick(event: Event) {

    if (this.item.isDisabled) {
      event.preventDefault();
      return;
    }

    this.active = !this.item.children;

    this.menuService.onMenuStateChanged({key: this.key});
  }

  ngOnDestroy(): void {

    if (this.menuResetSub) {
      this.menuResetSub.unsubscribe();
    }

    if (this.menuStateChangedSub) {
      this.menuStateChangedSub.unsubscribe();
    }

  }

}
