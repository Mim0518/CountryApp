import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RESTCountry} from '../interfaces/rest-countries.interfaces';
import {map, Observable, catchError, throwError} from 'rxjs';
import {Country} from '../interfaces/country.interface';
import {CountryMapper} from '../mappers/country.mapper';
const API_URL = 'https://restcountries.com/v3.1';
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string):Observable<Country[]> {
    query = query.toLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
        map(resp => CountryMapper.mapRESTCountryListToCountryList(resp)),
        // delay(1000),
        catchError((error) => {
          console.log('Error fetching ', error);
          return throwError(
            () => new Error(`No se pudieron obtener capitales con ese query: ${query}`)
          );
        })
      );
  }
  searchByCountry(query: string):Observable<Country[]>{
    query = query.toLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`).pipe(
      map(resp => CountryMapper.mapRESTCountryListToCountryList(resp)),
      // delay(1000),
      catchError((error) => {
        console.log('Error fetching ', error);
        return throwError(
          () => new Error(`No se pudieron obtener países con ese query: ${query}`)
        );
      })
    );
  }
  searchByAlphaCode(code: string){
    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`).pipe(
      map(resp => CountryMapper.mapRESTCountryListToCountryList(resp)),
      map(countries => countries.at(0)),
      // delay(1000),
      catchError((error) => {
        console.log('Error fetching ', error);
        return throwError(
          () => new Error(`No se pudieron obtener países con ese código: ${code}`)
        );
      })
    );
  }
}
