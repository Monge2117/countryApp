import { Component } from '@angular/core';
import { CountryService } from '../../services/Country.service';
import { Country } from '../../interfaces/Country.';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  country:Country[]=[];
  constructor(private CountryService:CountryService){}
SearchByCountry(term:string){
this.CountryService.searchCountry(term).subscribe(x =>{
this.country = x;
});
}
}
