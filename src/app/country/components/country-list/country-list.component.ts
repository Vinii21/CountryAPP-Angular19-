import { Component, inject, input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { CountryService } from '../../services/country.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'country-list',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {
  public countryService = inject(CountryService);
  countries = input.required<Country[]>();

  errorMessage = input<string|unknown|undefined>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);
}
