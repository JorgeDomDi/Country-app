import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root'
})
export class CountriesService implements OnInit {
  private apiUrl: string = "https://restcountries.com/v3.1"
  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: {
      term: '', countries: []
    }
  }
  constructor(private http: HttpClient) {
    console.log("iniciando servicio de country");
    this.loadToLocalStorage()
  }
private saveToLocalStorage(){
  localStorage.setItem('cacheStore',JSON.stringify(this.cacheStore))
}
private loadToLocalStorage(){
if(!localStorage.getItem('cacheStore'))return
this.cacheStore=JSON.parse(localStorage.getItem('cacheStore')!);
}

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(
      catchError(() => of([])),
      delay(200)
    );
  }
  ngOnInit(): void {


  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries=>this.cacheStore.byCapital={term:term,countries:countries}),tap( ()=>this.saveToLocalStorage())
    )
  }
  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`
    return this.getCountriesRequest(url) .pipe(
      tap(countries=>this.cacheStore.byCountry={term:term,countries:countries}),tap( ()=>this.saveToLocalStorage())
    )
  }
  searchRegion(term: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${term}`
    return this.getCountriesRequest(url) .pipe(
      tap(countries=>this.cacheStore.byRegion={term:term,countries:countries}),tap( ()=>this.saveToLocalStorage())
    )
  }
  searchCountryByAlphaCode(term: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${term}`
    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(error => of(null))
        // tap(countries=> console.log("Paso por el tap 1",countries)),
        // map(countries=>[]),
        // tap(countries=> console.log("Paso por el tap 2",countries)),
      )
  }
}
