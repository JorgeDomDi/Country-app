import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit {
  public countries:Country[]=[];
  public isLoading:boolean=false;
  public initialValue:string='';
  constructor(private countryService:CountriesService){

  }
  ngOnInit(): void {
    this.initialValue=this.countryService.cacheStore.byCapital.term;
    this.countries=this.countryService.cacheStore.byCapital.countries;
  }

  searchByCapital(term:string):void{
  console.log("Desde ByCapitalPage");
  console.log({term});
  this.isLoading=true;
  this.countryService.searchCapital(term).subscribe(
    
    countries=>{
    this.countries=countries;
    console.log(this.countries);
    this.isLoading=false;
      
    }
  )
  
  }
}
