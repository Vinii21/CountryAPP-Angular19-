import { Component, inject, input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'country-list',
  imports: [DecimalPipe],
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {
  public countryService = inject(CountryService);
  countries = input.required<Country[]>();
}
