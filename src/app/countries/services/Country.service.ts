import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/Country.';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { CacheStore } from '../interfaces/Cache-store.';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
private apiUrl:string ='https://restcountries.com/v3.1';
  constructor(private http:HttpClient) { }
cacheStore:CacheStore={
  ByCapital: {term:'',Countries:[]},
  ByCountry: {term:'',Countries:[]},
  ByRegion:  {region:undefined,Countries:[]}
}

  private getCountriesRequest(url:string):Observable<Country[]>{
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(error => of([]))
    );
  }
  searchByCountryByAlphaCode(code:string):Observable<Country | null>{
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
    .pipe(
      map(countries => countries.length > 0 ? countries[0]:null),
      catchError(error => of(null)));
   }

  searchByCapital(term:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${term}`;
   return this.getCountriesRequest(url);
  }

  searchCountry(term:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url);
  }

   searchRegion(term:string):Observable<Country[]>{
    const url =`${this.apiUrl}/region/${term}`;
    return this.getCountriesRequest(url);
   }
}
