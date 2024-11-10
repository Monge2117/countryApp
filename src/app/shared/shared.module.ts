import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/ContactPage/ContactPage.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';



@NgModule({
  declarations: [HomepageComponent , AboutPageComponent,SidebarComponent,ContactPageComponent, SearchboxComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomepageComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchboxComponent
  ]
})
export class SharedModule { }
