import { Component } from '@angular/core';
import { Country } from '../../interfaces/Country.';
import { CountryService } from '../../services/Country.service';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})

export class ByRegionPageComponent {
  country:Country[]=[];
  regiones:Region[] = ['Africa','America','Oceania','Europe','Asia'];
  selectedRegion?:Region;
  constructor(private CountryService:CountryService){}
SearchByRegion(term:Region){
  this.selectedRegion = term;
this.CountryService.searchRegion(term).subscribe(region =>{
this.country = region;
});
}
}
