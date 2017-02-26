import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './components/login.component';

import { CurrentDateComponent } from './components/currentDate.component';
import { CurrentTimeComponent } from './components/currentTime.component';

import { CheckinComponent } from './components/checkIn.component';
import { CheckoutComponent } from './components/checkout.component';


import { AppComponent }  from './app.component';
import { routing } from './components/app.routing';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule ],
  declarations: [ AppComponent, LoginComponent, CurrentDateComponent,
                  CurrentTimeComponent, CheckinComponent, CheckoutComponent,
                  
  
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
