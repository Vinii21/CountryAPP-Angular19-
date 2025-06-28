import { Component, inject, resource, signal } from '@angular/core';
import { CountrySearchInputComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { firstValueFrom, of } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop'

@Component({
  selector: 'country-page',
  imports: [CountrySearchInputComponent, CountryListComponent],
  templateUrl: './country-page.component.html',
})
export default class CountryPageComponent {

  countryService = inject(CountryService);
  query = signal<string>('');

  countryResource = rxResource({
    request: ()=>({query: this.query()}),
    loader: ({request}) => {
      if(!request.query) {
        this.countryService.stateError.set('')
        return of([])
      }
      return this.countryService.searchByCountry(request.query)
    }
  });
}
