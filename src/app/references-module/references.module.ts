import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCardsComponent} from "./components/product-cards/product-cards.component";
import {RouterModule} from "@angular/router";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {MenubarModule} from "primeng/menubar";

@NgModule({
  declarations: [ProductCardsComponent],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    MenubarModule
  ],
  exports:[RouterModule]
})
export class ReferencesModule { }
