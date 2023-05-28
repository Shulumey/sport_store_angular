import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {LayoutModule} from "./components/layout/layout.module";
import {AppComponent} from "./components/app/app.component";
import { MenuitemComponent } from './menuitem/menuitem.component';

@NgModule({
  declarations: [AppComponent, MenuitemComponent],
  imports: [
    BrowserModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
