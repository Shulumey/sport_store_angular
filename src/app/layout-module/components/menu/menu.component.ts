import { Component, OnInit } from '@angular/core';
import {Menuitem} from "../../models/menuitem";
import {MenuService} from "../../services/menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menu: Menuitem[];

  constructor(private menuProvider: MenuService) {
    this.menu = [];
    menuProvider.menuSource$.subscribe(menuItem => this.menu.push(menuItem))
  }

  ngOnInit(): void {
  }

}
