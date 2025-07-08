import { Component } from '@angular/core';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './country-list.html'
})
export class CountryList {
  onSearch(value: string) {
    console.log(value);
  }
}
