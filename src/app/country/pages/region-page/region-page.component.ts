import { Component } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list.component";

@Component({
  selector: 'region-page',
  imports: [CountryListComponent],
  templateUrl: './region-page.component.html',
})
export default class RegionPageComponent {

}
