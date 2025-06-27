import { Component, inject, signal } from '@angular/core';
import { CountrySearchInputComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'by-capital-page',
  imports: [CountrySearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
})
export default class ByCapitalPageComponent {

  countryService = inject(CountryService);
  isLoading = signal<boolean>(false);
  isError = signal<string | null>(null);
  countries = signal<Country[]>([]);

  // Muestra el valor que el componente hijo envió
  onSearchFromSon(value:string) {
    if ( this.isLoading() ) return;

    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCapita(value)
    .subscribe({
      next: (countries)=>{
        this.isLoading.set(false);
        this.countries.set(countries);
      },
      error: (err) => {
        //console.log(err)
        this.isLoading.set(false);
        this.isError.set(err);
        this.countries.set([]);
      }
    })
  };
}
