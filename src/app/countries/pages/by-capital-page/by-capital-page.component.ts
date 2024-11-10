import { Component } from '@angular/core';
import { CountryService } from '../../services/Country.service';
import { Country } from '../../interfaces/Country.';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  public country:Country[]=[];
  constructor(private CountryService:CountryService){};

SearchByCapital(term:string):void{
this.CountryService.searchByCapital(term).subscribe(c =>{
  this.country = c;
});
}
}
