import { Routes } from "@angular/router";
import { ByCapitalPageComponent } from "./pages/by-capital-page/by-capital-page.component";

export const routes: Routes = [
  {
    path: '',
    title: 'By Capital',
    component: ByCapitalPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export default routes;
