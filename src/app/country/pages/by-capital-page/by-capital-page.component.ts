import { Component, inject } from '@angular/core';
import { CountrySearchInputComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'by-capital-page',
  imports: [CountrySearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
})
export default class ByCapitalPageComponent {

  countryService = inject(CountryService);

  // Muestra el valor que el componente hijo envió
  onSearchFromSon(value:string) {
    this.countryService.searchByCapita(value)
    .subscribe((data)=>{
        console.log(data)
      })
  };
}
