import {Component, inject} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-country-404',
  imports: [],
  templateUrl: './country-404.html'
})
export class Country404 {
  location = inject(Location);

  goBack() {
    this.location.back();
  }
}
