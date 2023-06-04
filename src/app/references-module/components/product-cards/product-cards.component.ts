import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {MenuItem, PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.scss']
})
export class ProductCardsComponent implements OnInit, OnDestroy {

  private paramsSub: Subscription;
  private id: number | undefined;
  menuItems: MenuItem[];

  constructor(private activeRoute: ActivatedRoute) {
    this.paramsSub = activeRoute.params.subscribe(params => this.id = params['id'])

    this.menuItems = [
      {label: "Обновить", icon: PrimeIcons.REFRESH},
      {
        label: "Загрузить", icon: PrimeIcons.DOWNLOAD,
        items: [
          {label:"Собственные карточки"}
        ]
      }]
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

    if (this.paramsSub) {
      this.paramsSub.unsubscribe();
    }
  }

}
