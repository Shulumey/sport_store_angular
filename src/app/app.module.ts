import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./components/app/app.component";
import {LayoutModule} from "./layout-module/layout.module";
import {ReferencesModule} from "./references-module/references.module";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LayoutModule,
    ReferencesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
