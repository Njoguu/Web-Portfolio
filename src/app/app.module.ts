import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';

// import { AngularFireModule } from '@angular/fire';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDZ-ESNCv9voIBgF5sOhiGj0bCtVHXlhxo",
  authDomain: "web-portfolio-msgs.firebaseapp.com",
  projectId: "web-portfolio-msgs",
  storageBucket: "web-portfolio-msgs.appspot.com",
  messagingSenderId: "832142751030",
  appId: "1:832142751030:web:e238cc9945b4fc703aaf97"
};

const app = initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    // AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
