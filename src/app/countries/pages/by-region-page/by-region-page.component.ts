import { Component } from '@angular/core';
import { Country } from '../../interfaces/Country.';
import { CountryService } from '../../services/Country.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  country:Country[]=[];
  constructor(private CountryService:CountryService){}
SearchByRegion(term:string){
this.CountryService.searchRegion(term).subscribe(region =>{
this.country = region;
});
}
}
