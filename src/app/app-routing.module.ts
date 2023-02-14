import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Step1Component } from './Components/step1/step1.component';
import { Step3Component } from './Components/step3/step3.component';
import { Step4Component } from './Components/step4/step4.component';
import { Step6Component } from './Components/step6/step6.component';
import { Step7Component } from './Components/step7/step7.component';
import { Step2Component } from './Components/step2/step2.component';
import { VolkasoComponent } from './Components/volkaso/volkaso.component';
import { Step5Component } from './Components/step5/step5.component';
import { Step8Component } from './Components/step8/step8.component';
import { Product1Component } from './Components/product1/product1.component';
import { Product2Component } from './Components/product2/product2.component';
import { Step9Component } from './Components/step9/step9.component';
import { Stept7Component } from './Components/stept7/stept7.component';


const routes: Routes = [

  {path : 'step1' , component : Step1Component},
  {path : 'step1/volkasko' , component : VolkasoComponent},
  {path : 'step2' ,  component : Step2Component} ,
  {path : 'step3' ,  component : Step3Component} ,
  {path : 'step4' ,  component : Step4Component} ,
  {path : 'step5' ,  component : Step5Component} ,
    {path : 'step6' ,  component : Step6Component},
    // eyyyak ntesti step7 //
    {path : 'step7' ,  component : Stept7Component},
    
  {path : 'step8' ,  component : Step8Component} ,
  {path : 'product' ,  component : Product1Component} ,
  {path: 'aa' , component : Step7Component} ,
  {path : 'product9' ,  component : Step9Component} ,

  
  {path : '' , redirectTo : 'step1' , pathMatch : 'full'} ,
  {path : '**' , redirectTo : 'step1', pathMatch : 'full'} ,
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
