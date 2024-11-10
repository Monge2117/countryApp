import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-homepage',
  templateUrl: './homepage.component.html',
  styles: `
    :host {
      display: block;
    }
  `
})
export class HomepageComponent { }
