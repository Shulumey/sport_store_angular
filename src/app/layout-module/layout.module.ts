import { NgModule } from '@angular/core';
import {NgClass} from '@angular/common';
import {RouterLinkWithHref} from "@angular/router";
import {DynamicDialogModule} from "primeng/dynamicdialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {MenuService} from "./services/menu.service";
import {LayoutService} from "./services/layout.service";
import {AppLayoutComponent} from "./components/app-layout/app-layout.component";
import {AppTopbarComponent} from "./components/app-topbar/app-topbar.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {MenuitemComponent} from "./components/menuitem/menuitem.component";
import {MenuComponent} from "./components/menu/menu.component";
@NgModule({
  declarations: [
    AppLayoutComponent,
    AppTopbarComponent,
    SettingsComponent,
    MenuitemComponent,
    MenuComponent],
  imports: [
    RouterLinkWithHref,
    DynamicDialogModule,
    BrowserAnimationsModule,
    NgClass,
  ],
  providers:[MenuService, LayoutService],
  exports: [
    AppLayoutComponent
  ],
  bootstrap: [AppLayoutComponent]
})
export class LayoutModule { }