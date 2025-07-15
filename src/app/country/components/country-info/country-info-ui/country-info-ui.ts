import {Component, input} from '@angular/core';
import {Country} from '../../../interfaces/country.interface';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'country-info-ui',
  imports: [
    DecimalPipe
  ],
  templateUrl: './country-info-ui.html',
})
export class CountryInfoUi {
  country = input.required<Country>();
}
