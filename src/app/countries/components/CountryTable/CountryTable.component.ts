
import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/Country.';

@Component({
  selector: 'countries-table',
  templateUrl: './CountryTable.component.html',
  styles: `
    :host {
      display: block;
    }
    img{
      width:25px;
    }
  `
})
export class CountryTableComponent {

  @Input()
  Countries:Country[]=[];
}
