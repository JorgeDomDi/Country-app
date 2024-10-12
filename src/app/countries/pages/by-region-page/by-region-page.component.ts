import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
type Region='Africa'|'Americas'|'Asia'|'Europe'|'Oceania'
@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {
  public countries:Country[]=[];
  public isLoading:boolean=false;
  public regions:Region[]=['Africa','Americas','Asia','Europe','Oceania']
  public selectedRegion?:Region;
  constructor(private countryService:CountriesService){

  }

  searchByRegion(region:Region):void{
    this.selectedRegion=region
    this.isLoading=true;
  console.log("Desde ByCapitalPage");
  console.log({region});
  this.countryService.searchRegion(region).subscribe(
    countries=>{
    this.countries=countries;
    console.log(this.countries);
    this.isLoading=false;
      
    }
  )
  
  }
}
