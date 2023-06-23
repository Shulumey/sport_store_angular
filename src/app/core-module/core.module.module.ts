import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgDestroyComponentDirective} from "./ng.destroy.component.directive";
import {AuthService} from "./services/auth.service";
import {LayoutModule} from "../layout-module/layout.module";

@NgModule({
  declarations: [NgDestroyComponentDirective],
  exports:[NgDestroyComponentDirective],
  providers:[AuthService],
  imports: [
    CommonModule,
    LayoutModule
  ]
})
export class CoreModuleModule { }
