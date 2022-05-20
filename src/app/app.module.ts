import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// My Components
import { HeaderComponent } from '../templates/menu/HeaderComponent.component';
import { AboutMe } from 'src/templates/AboutMe/AboutMe.component';
import { BoxComponent } from './components/box/box.component';
import { Experience } from '../templates/Experience/Experience.component';
import { Education } from 'src/templates/Education/Education.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMe,
    BoxComponent,
    Experience,
    Education
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
