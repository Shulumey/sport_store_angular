import {Component, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {Menuitem} from "../../models/menuitem";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MenuService} from "../../services/menu.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: '[app-menuitem]',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss'],
  animations: [
    trigger('children', [
      state('collapsed', style({
        height: '0'
      })),
      state('expanded', style({
        height: '*'
      })),
      transition('collapsed <=> expanded', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
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

    this.item = {
      title: ""
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
    let activeRoute = await this.router.navigate(this.item.routerLink ? [], { paths: 'exact', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' });

    if (activeRoute) {
      this.menuService.onMenuStateChange({ key: this.key, routeEvent: true });
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
