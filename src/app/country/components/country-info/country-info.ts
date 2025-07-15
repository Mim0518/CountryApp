import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {rxResource} from '@angular/core/rxjs-interop';
import {CountryService} from '../../services/country';
import {Country404} from '../../../shared/components/country-404/country-404';
import {CountryInfoUi} from './country-info-ui/country-info-ui';

@Component({
  selector: 'country-info',
  imports: [
    Country404,
    CountryInfoUi
  ],
  templateUrl: './country-info.html'
})
export class CountryInfo {
  countryCode = inject(ActivatedRoute).snapshot.params['code'];
  countryService = inject(CountryService);
  countryResource = rxResource({
    params: ()=>({code: this.countryCode}),
    stream: ({ params }) =>{
      return this.countryService.searchByAlphaCode(params.code);
    },
  });
}
