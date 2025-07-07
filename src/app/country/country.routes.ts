import { Routes } from '@angular/router';
import {CountryLayoutComponent} from './layouts/country-layout/country-layout';
import {ByCapital} from './pages/by-capital/by-capital';
import {ByCountry} from './pages/by-country/by-country';
import {ByRegion} from './pages/by-region/by-region';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutComponent,
    children:[
      {
        path: 'byCapital',
        component: ByCapital
      },
      {
        path: 'byCountry',
        component: ByCountry
      },
      {
        path: 'byRegion',
        component: ByRegion
      },
      {
        path: '**',
        redirectTo: 'byCapital'
      }
    ]
  }
];

export default countryRoutes;
