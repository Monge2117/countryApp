import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/Country.';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
private apiUrl:string ='https://restcountries.com/v3.1';
  constructor(private http:HttpClient) { }

  searchByCountryByAlphaCode(code:string):Observable<Country | null>{
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
    .pipe(
      map(countries => countries.length > 0 ? countries[0]:null),
      catchError(error => of(null)));
   }

  searchByCapital(term:string):Observable<Country[]>{
   return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`)
   .pipe(catchError(error => of([])));
  }

  searchCountry(term:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/name/${term}`)
    .pipe(catchError(error => of([])));
   }

   searchRegion(term:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/region/${term}`)
    .pipe(catchError(error => of([])));
   }
}
