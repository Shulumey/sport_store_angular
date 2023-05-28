import { NgModule } from '@angular/core';
import {NgClass} from '@angular/common';
import {AppLayoutComponent} from "./app-layout/app-layout.component";
import {AppTopbarComponent} from "./app-topbar/app-topbar.component";
import {RouterLinkWithHref} from "@angular/router";
import {SettingsComponent} from "./settings/settings.component";
import {DynamicDialogModule} from "primeng/dynamicdialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
@NgModule({
  declarations: [AppLayoutComponent, AppTopbarComponent, SettingsComponent],
  imports: [
    RouterLinkWithHref,
    DynamicDialogModule,
    BrowserAnimationsModule,
    NgClass
  ],
  exports: [
    AppLayoutComponent
  ],
  bootstrap: [AppLayoutComponent]
})
export class LayoutModule { }
