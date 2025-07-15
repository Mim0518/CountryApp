import {RESTCountry} from '../interfaces/rest-countries.interfaces';
import {Country} from '../interfaces/country.interface';

export class CountryMapper {
  static mapRESTCountryToCountry(restCountry: RESTCountry): Country {
    return{
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.translations['spa'].common ?? restCountry.name,
      capital: restCountry.capital?.join(', ') ?? 'Sin capital', // Añadido operador opcional y valor por defecto
      population: restCountry.population
    };
  }

  static mapRESTCountryListToCountryList(restCountryList: RESTCountry[]): Country[] {
    return restCountryList.map(this.mapRESTCountryToCountry);
  }
}
