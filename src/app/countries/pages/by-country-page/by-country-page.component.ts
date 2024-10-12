import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent implements OnInit {
  public countries:Country[]=[];
  public isLoading:boolean=false;
  public initialValue: string='';
  constructor(private countryService:CountriesService){

  }
  ngOnInit(): void {
    this.initialValue=this.countryService.cacheStore.byCountry.term;
    this.countries=this.countryService.cacheStore.byCountry.countries;
  }

  searchByCountry(term:string):void{
    this.isLoading=true;
  console.log("Desde ByCapitalPage");
  console.log({term});
  this.countryService.searchCountry(term).subscribe(
    countries=>{
    this.countries=countries;
    console.log(this.countries);
    
    this.isLoading=false;
    }
  )
  
  }
}
