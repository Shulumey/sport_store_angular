import {Routes} from '@angular/router';
import {AppLayoutComponent} from "./layout-module/components/app-layout/app-layout.component";
import {ProductCardsComponent} from "./references-module/components/product-cards/product-cards.component";
import {LoginComponent} from "./login-module/components/login/login.component";

export const AppRoutes: Routes = [{
  path: '', component: AppLayoutComponent,
  children: [
    {
      path: 'productCards', component:ProductCardsComponent
     // loadChildren: () => import('././references-module/references.module').then(x => x.ReferencesModule)
    }
  ]
},
  { path: 'login', component: LoginComponent },
  {
    path: '**', redirectTo: '/'
  }]

