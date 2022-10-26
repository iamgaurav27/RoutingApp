import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicecentreComponent } from './servicecentre/servicecentre.component';
import { PatnaComponent } from './servicecentre/patna/patna.component';
import { PuneComponent } from './servicecentre/pune/pune.component';
import { BangloreComponent } from './servicecentre/banglore/banglore.component';



@NgModule({
  declarations:
   [
    AppComponent,
    routingcomponents,
    ServicecentreComponent,
    PatnaComponent,
    PuneComponent,
    BangloreComponent,
    

    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
