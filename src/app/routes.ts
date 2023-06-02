import {Routes} from '@angular/router';
import {AppLayoutComponent} from "./layout-module/components/app-layout/app-layout.component";

export const AppRoutes: Routes = [{
  path: '', component: AppLayoutComponent,
  children: [
    {
      path: 'references',
      loadChildren: () => import('././references-module/references.module').then(x => x.ReferencesModule)
    }
  ]
},
  {
    path: '**', redirectTo: '/'
  }]

