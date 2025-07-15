import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';
import { NotFoundComponent } from '../../components/not-found/not-found.component';

@Component({
  selector: 'detail-country-page',
  imports: [NotFoundComponent],
  templateUrl: './detail-country-page.component.html',
})
export default class DetailCountryPageComponent {

  private countryCode = inject(ActivatedRoute).snapshot.params['code'];
  countryService = inject(CountryService);

  detailCountryrResouce = rxResource({
    request: () => ({code: this.countryCode}),
    loader: ({request}) => {
      if(!request.code) return of();

      return this.countryService.searchCountryByCode(request.code);
    }
  });

}
