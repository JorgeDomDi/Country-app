import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit {
  country?:Country;
  constructor(private activatedRoute: ActivatedRoute,
    private countryService: CountriesService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.searchCountryByAlphaCode(id))
      )
      .subscribe(
        country => {
          console.log(country);
          if(!country){
            return this.router.navigateByUrl("")
          }
        
          console.log("tenemos un pais");
          return   this.country=country;

        }
      )
  }


}
