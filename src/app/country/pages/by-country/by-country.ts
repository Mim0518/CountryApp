import {Component, inject, signal} from '@angular/core';
import {SearchInput} from '../../components/search-input/search-input';
import {CountryList} from '../../components/country-list/country-list';
import {CountryService} from '../../services/country';
import {of} from 'rxjs';
import {rxResource} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-country',
  imports: [
    SearchInput,
    CountryList
  ],
  templateUrl: './by-country.html'
})
export class ByCountry {
  countryService = inject(CountryService);
  query = signal('');

  countryResource = rxResource({
    params: ()=>({query: this.query()}),
    stream: ({params})=>{
      if(!params.query) return of([]);
      return this.countryService.searchByCountry(params.query)
    },
  });

  // countryResource = resource({
  //   params: ()=>({query: this.query()}),
  //   loader: async({params})=> {
  //     if(!params.query) return[];
  //     return await firstValueFrom(
  //       this.countryService.searchByCountry(params.query)
  //     );
  //   },
  // })
}
