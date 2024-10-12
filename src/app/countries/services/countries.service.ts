import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl:string="https://restcountries.com/v3.1"

  constructor(private http:HttpClient) { }


  searchCapital(term:string):Observable<Country[]>{
    const url=`${this.apiUrl}/capital/${term}`
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(error => of ([]))
      // tap(countries=> console.log("Paso por el tap 1",countries)),
      // map(countries=>[]),
      // tap(countries=> console.log("Paso por el tap 2",countries)),
    )
  }
  searchCountry(term:string):Observable<Country[]>{
    const url=`${this.apiUrl}/name/${term}`
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(error => of ([]))
      // tap(countries=> console.log("Paso por el tap 1",countries)),
      // map(countries=>[]),
      // tap(countries=> console.log("Paso por el tap 2",countries)),
    )
  }
  searchRegion(term:string):Observable<Country[]>{
    const url=`${this.apiUrl}/region/${term}`
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(error => of ([]))
      // tap(countries=> console.log("Paso por el tap 1",countries)),
      // map(countries=>[]),
      // tap(countries=> console.log("Paso por el tap 2",countries)),
    )
  }
  searchCountryByAlphaCode(term:string):Observable<Country | null>{
    const url=`${this.apiUrl}/alpha/${term}`
    return this.http.get<Country[]>(url)
    .pipe(
      map(countries=>countries.length>0 ? countries[0]: null),
      catchError(error => of (null))
      // tap(countries=> console.log("Paso por el tap 1",countries)),
      // map(countries=>[]),
      // tap(countries=> console.log("Paso por el tap 2",countries)),
    )
  }
}
