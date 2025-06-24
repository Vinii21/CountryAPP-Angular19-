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
        path: 'by-country',
        title: 'By Country',
        loadComponent: () => import('./pages/country-page/country-page.component')
      },
      {
        path: 'by-region',
        title: 'By Region',
        loadComponent: () => import('./pages/region-page/region-page.component')
      },
      {
        path: 'by/:code',
        title: 'Details',
        loadComponent: () => import('./pages/detail-country-page/detail-country-page.component')
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
