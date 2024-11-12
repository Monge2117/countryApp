import { Country } from './../../interfaces/Country.';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/Country.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  Country?:Country;
constructor(private activateRoute:ActivatedRoute,private CountryService:CountryService,private router:Router){}
  ngOnInit(): void {
  this.activateRoute.params
  .pipe(
    switchMap(({id})=>this.CountryService.searchByCountryByAlphaCode(id)),
  )
 .subscribe(country =>{
    if(!country) return this.router.navigateByUrl('');

     return this.Country = country;
  })
  }
}
