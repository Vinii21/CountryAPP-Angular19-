import { Component, inject, resource, signal } from '@angular/core';
import { CountrySearchInputComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { firstValueFrom } from 'rxjs';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'country-page',
  imports: [CountrySearchInputComponent, CountryListComponent],
  templateUrl: './country-page.component.html',
})
export default class CountryPageComponent {

  countryService = inject(CountryService);
  query = signal<string>('');

  countryResource = resource({
    request: ()=>({query: this.query()}),
    loader: async ({request}) => {
      if(!request.query) {
        this.countryService.stateError.set('')
        return []
      }
      return await firstValueFrom(
        this.countryService.searchByCountry(request.query)
      )
    }
  });
}
