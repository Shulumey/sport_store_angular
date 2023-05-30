import {Injectable} from '@angular/core';
import {concatAll, defer, Observable, of, Subject} from "rxjs";
import {PrimeIcons} from "primeng/api";
import {Menuitem} from "../models/menuitem";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuModel: Menuitem[]
  public menuSource$: Observable<Menuitem>;
  constructor() {

    this.menuModel = [
      {
        title: "Карточки товаров",
        icon: PrimeIcons.ID_CARD
      },
      {
        title: "Заказы КМ",
        icon: PrimeIcons.CART_PLUS
      }];

    console.log(this.menuModel);
    this.menuSource$ = defer(() => of(this.menuModel).pipe(concatAll()));

  }
}
