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
        title: "Линии упаковывания",
        icon: PrimeIcons.BOX
      },
      {
        title: "Коды маркировки",
        icon: PrimeIcons.CLOUD,
        children: [
          {
            title: "Заказы на КМ",
            icon: PrimeIcons.BRIEFCASE
          },
          {
            title:"Реестр КМ",
            icon: PrimeIcons.DATABASE,
            children:[
              {
                title:"Полученные КМ",
                icon: PrimeIcons.INBOX,
              },
              {
                title:"Отпечатанные КМ",
                icon: PrimeIcons.PRINT,
              },
              {
                title:"Продукция с КМ",
              }
            ]
          }
        ]
      }
    ];

    console
      .log(this

        .menuModel
      );
    this
      .menuSource$ = defer(() => of(this.menuModel).pipe(concatAll()));

  }
}
