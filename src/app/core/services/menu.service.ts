import { Injectable } from '@angular/core';
import {MenuProvider} from "../api/menuprovider";
import {defer, Observable, of, Subject} from "rxjs";
import {Menuitem} from "../api/menuitem";

@Injectable({
  providedIn: 'root'
})
export class MenuService implements MenuProvider {

  private menuModel: Menuitem[]

  constructor() {

    this.menuModel = [];

    this.menuSource$ =  defer(()=>of(this.menuModel));

  }

  menuSource$: Observable<Menuitem>;
}
