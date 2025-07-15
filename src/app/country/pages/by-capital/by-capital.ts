import {Component, inject, signal} from '@angular/core';
import {SearchInput} from '../../components/search-input/search-input';
import {CountryList} from '../../components/country-list/country-list';
import {CountryService} from '../../services/country';
import {of} from 'rxjs';
import {rxResource} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-capital',
  imports: [
    SearchInput,
    CountryList
  ],
  templateUrl: './by-capital.html'
})
export class ByCapital {
  countryService = inject(CountryService);
  query = signal('');

  capitalResource = rxResource({
    params: ()=>({query: this.query()}),
    stream: ({params})=>{
      if(!params.query) return of([]);
      return this.countryService.searchByCapital(params.query)
    },
  });

  // capitalResource = resource({
  //   params: ()=>({query: this.query()}),
  //   loader: async({params})=> {
  //     if(!params.query) return[];
  //     return await firstValueFrom(
  //       this.countryService.searchByCapital(params.query)
  //     );
  //   },
  // })

}
