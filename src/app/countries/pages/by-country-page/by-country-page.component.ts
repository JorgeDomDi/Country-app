import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {
  public countries:Country[]=[];
  public isLoading:boolean=false;
  constructor(private countryService:CountriesService){

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
