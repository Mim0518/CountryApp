import { Component } from '@angular/core';
import {SearchInput} from '../../components/search-input/search-input';
import {CountryList} from '../../components/country-list/country-list';

@Component({
  selector: 'app-by-capital',
  imports: [
    SearchInput,
    CountryList
  ],
  templateUrl: './by-capital.html'
})
export class ByCapital {
  onSearch(value: string) {
     console.log(value);
   }
}
