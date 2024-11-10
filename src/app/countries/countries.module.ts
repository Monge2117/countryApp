import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryRoutingModule } from './country.routing.module';
import { SharedModule } from '../shared/shared.module';

import { CountryTableComponent } from './components/CountryTable/CountryTable.component';


@NgModule({
  declarations: [
    ByCountryPageComponent,ByCapitalPageComponent,CountryPageComponent, ByRegionPageComponent,CountryTableComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    SharedModule
  ]
})
export class CountriesModule { }
