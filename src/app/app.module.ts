import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// My Components
import { HeaderComponent } from '../templates/menu/HeaderComponent.component';
import { AboutMe } from 'src/templates/AboutMe/AboutMe.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
