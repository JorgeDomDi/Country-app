import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent implements OnInit {
  public countries:Country[]=[];
  public isLoading:boolean=false;
  public regions:Region[]=['Africa','Americas','Asia','Europe','Oceania']
  public selectedRegion?:Region='';
  constructor(private countryService:CountriesService){

  }
  ngOnInit(): void {
    this.selectedRegion=this.countryService.cacheStore.byRegion.term;
    this.countries=this.countryService.cacheStore.byCountry.countries;
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
