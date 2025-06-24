import { Component } from '@angular/core';
import { CountrySearchInputComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";

@Component({
  selector: 'country-page',
  imports: [CountrySearchInputComponent, CountryListComponent],
  templateUrl: './country-page.component.html',
})
export default class CountryPageComponent {
  onValue(value: string) {
    console.log({countryPage: value})
  }
}
