import { Routes } from "@angular/router";
import { CountryLayaoutComponent } from "./layouts/country-layaout/country-layaout.component";

export const routes: Routes = [
  {
    path: '',
    component: CountryLayaoutComponent,
    children: [
      {
        path: 'by-capital',
        title: 'By Capital',
        loadComponent: () => import('./pages/by-capital-page/by-capital-page.component')
      },
      {
        path: '**',
        redirectTo: 'by-capital'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export default routes;
