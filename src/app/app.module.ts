import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { LoginComponent } from './components/login.component';

import { CurrentDateComponent } from './components/currentDate.component';
import { CurrentTimeComponent } from './components/currentTime.component';

import { CheckinComponent } from './components/checkIn.component';
import { CheckoutComponent } from './components/checkout.component';


import { AppComponent }  from './app.component';
import { routing } from './components/app.routing';

import { FormsModule } from '@angular/forms';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
export const firebaseConfig = {
    apiKey: "AIzaSyCx-oL-c4MZyfZpRu6ay-SFiUPpLv7JBlc",
    authDomain: "checkinapp-dc892.firebaseapp.com",
    databaseURL: "https://checkinapp-dc892.firebaseio.com",
    storageBucket: "checkinapp-dc892.appspot.com",
    messagingSenderId: "761473046167"
}

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule, Http, AngularFireModule.initializeApp(firebaseConfig) ],
  declarations: [ AppComponent, LoginComponent, CurrentDateComponent,
                  CurrentTimeComponent, CheckinComponent, CheckoutComponent,
                  
  
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
