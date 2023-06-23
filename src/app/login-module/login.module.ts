import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./components/login/login.component";
import {RouterLink} from "@angular/router";
import {PasswordModule} from "primeng/password";
import {CheckboxModule} from "primeng/checkbox";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterLink,
    PasswordModule,
    CheckboxModule,
    ButtonModule,
    RippleModule,
    InputTextModule
  ]
})
export class LoginModule { }
