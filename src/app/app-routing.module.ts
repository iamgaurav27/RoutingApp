import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './brand/brand.component';
import { HomeComponent } from './home/home.component';
import { MahindraComponent } from './mahindra/mahindra.component';
import { ScorpioComponent } from './mahindra/scorpio/scorpio.component';
import { XuvComponent } from './mahindra/xuv/xuv.component';
import { BreezaComponent } from './maruti/breeza/breeza.component';
import { ErtigaComponent } from './maruti/ertiga/ertiga.component';
import { MarutiComponent } from './maruti/maruti.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BangloreComponent } from './servicecentre/banglore/banglore.component';
import { PatnaComponent } from './servicecentre/patna/patna.component';
import { PuneComponent } from './servicecentre/pune/pune.component';
import { ServicecentreComponent } from './servicecentre/servicecentre.component';

import { HarrierComponent } from './tata/harrier/harrier.component';
import { NexonComponent } from './tata/nexon/nexon.component';
import { PunchComponent } from './tata/punch/punch.component';
import { TataComponent } from './tata/tata.component';

const routes: Routes = [
  { path :'',redirectTo:'/home',pathMatch:'full'},

  { path: 'home' , component : HomeComponent},

  { path: 'brand' , component :BrandComponent ,
    children: [
    {
      path:'tata', component: TataComponent,
      children:[
        {path:'harrier',component:HarrierComponent},
        {path:'nexon',component:NexonComponent},
        {path:'punch',component:PunchComponent}
      ]
    },
    {
      path:'maruti', component: MarutiComponent,
    
      children:[
        {path:'ertiga',component:ErtigaComponent},
        
        {path:'breeza',component:BreezaComponent}
      ]
    },
    {
      path:'mahindra', component: MahindraComponent,

      children:[
        {path:'xuv',component:XuvComponent},
        
        {path:'scorpio',component:ScorpioComponent}
      ]
    }
  ]},

 /* { path:'servicecentre',loadChildren:()=>import('./servicecentre/servicecentre.module').then(mod=>mod.ServicecentreModule)},*/
 
 { path: 'servicecentre' , component :ServicecentreComponent ,
 children: [
  {path:'patna',component: PatnaComponent},
  {path:'pune',component:PuneComponent},
  {path:'banglore',component:BangloreComponent}
  
  
 ]},

  { path:'**' , component :  PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingcomponents = [BrandComponent,
  PageNotFoundComponent,ServicecentreComponent,
  HomeComponent,PatnaComponent,PuneComponent,BangloreComponent,
  TataComponent,MarutiComponent,MahindraComponent,HarrierComponent,NexonComponent,PunchComponent,ErtigaComponent,BreezaComponent,XuvComponent,ScorpioComponent
]
