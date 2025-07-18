import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { RESTCountry } from '../interfaces/RESTCountry.interfaces';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { countryMapper } from '../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);

  stateError = signal<string>('');

  searchByCapita(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
    .pipe(
      map(restCountries => {
        this.stateError.set('');
        return countryMapper.mapCountriesToCountriesArray(restCountries)}),
      catchError( err => {
        const errorMessage = `No se pudo encontrar países con ese query: ${query}`;
        this.stateError.set(errorMessage);
        console.log(`Error fetchin`, err);
        return throwError(()=>new Error(errorMessage))
      })
    )
  };

  searchByCountry(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`)
    .pipe(
      map(restCountries => {
        this.stateError.set('');
        return countryMapper.mapCountriesToCountriesArray(restCountries)}),
      delay(3000),
      catchError( err => {
        const errorMessage = `No se pudo encontrar países con ese query: ${query}`;
        this.stateError.set(errorMessage);
        console.log(`Error fetchin`, err);
        return throwError(()=>new Error(errorMessage))
      })
    )
  }

  searchCountryByCode(code: string) {

    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`)
    .pipe(
      map(restCountries => {
        this.stateError.set('');
        return countryMapper.mapCountriesToCountriesArray(restCountries)}),
      map(countries => countries.at(0)),
      catchError( err => {
        const errorMessage = `No se pudo encontrar países con ese código: ${code}`;
        this.stateError.set(errorMessage);
        console.log(`Error fetchin`, err);
        return throwError(()=>new Error(errorMessage))
      })
    )
  }
}
