import {Injectable} from '@angular/core';
import {concatAll, defer, Observable, of, Subject} from "rxjs";
import {PrimeIcons} from "primeng/api";
import {Menuitem} from "../models/menuitem";
import {MenuChangeEvent} from "../models/menuchangeevent";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuModel: Menuitem[]
  public menuSource$: Observable<Menuitem>;
  public menuStateChanged$ = new Subject<MenuChangeEvent>();

  public resetSource$ = new Subject();

  constructor() {

    this.menuModel = [
      {
        title: "Карточки товаров",
        icon: PrimeIcons.ID_CARD,
        routerLink: 'r/productcards'
      },
      {
        title: "Линии упаковывания",
        icon: PrimeIcons.BOX
      },
      {
        title: "Заказы на КМ",
        icon: PrimeIcons.BRIEFCASE
      },
      {
        title: "Реестр КМ",
        icon: PrimeIcons.DATABASE,
        children: [
          {
            title: "Полученные КМ",
            icon: PrimeIcons.INBOX,
          },
          {
            title: "Отпечатанные КМ",
            icon: PrimeIcons.PRINT,
          },
          {
            title: "Продукция с КМ",
          }
        ]
      }
    ];

    this.menuSource$ = defer(() => of(this.menuModel).pipe(concatAll()));

  }

  onMenuStateChanged(event:MenuChangeEvent){
    this.menuStateChanged$.next(event);
  }

  reset(){
    this.resetSource$.next(true);
  }
}
