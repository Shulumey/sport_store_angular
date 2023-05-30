import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Menuitem} from "../../models/menuitem";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: '[app-menuitem]',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss'],
  animations:[
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
export class MenuitemComponent implements OnInit {

  @Input() item: Menuitem;

  @Input() index!: number;

  @Input() parentKey!: string;

  key: string = "";
  active = false;

  constructor() {
    this.item = {
      title: ""
    };
  }

  ngOnInit(): void {
    this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
  }

  @HostBinding('class.active-menuitem')
  get activeClass() {
    return this.active;// && !this.item.children;
  }

  itemClick(event: Event){

    if (this.item.isDisabled) {
      event.preventDefault();
      return;
    }
  }

}
