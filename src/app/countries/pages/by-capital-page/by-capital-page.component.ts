import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {
  public countries:Country[]=[];
  constructor(private countryService:CountriesService){

  }

  searchByCapital(term:string):void{
  console.log("Desde ByCapitalPage");
  console.log({term});
  this.countryService.searchCapital(term).subscribe(
    countries=>{
    this.countries=countries;
    console.log(this.countries);
    
      
    }
  )
  
  }
}