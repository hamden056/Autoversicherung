import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Step1Component } from './Components/step1/step1.component';
import { Step3Component } from './Components/step3/step3.component';
import { Step4Component } from './Components/step4/step4.component';
import { Step5Component } from './Components/step5/step5.component';
import { Step6Component } from './Components/step6/step6.component';
import { Step7Component } from './Components/step7/step7.component';
import { Step8Component } from './Components/step8/step8.component';
import { Step2Component } from './Components/step2/step2.component';
import { VolkasoComponent } from './Components/volkaso/volkaso.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Product1Component } from './Components/product1/product1.component';
import { Product2Component } from './Components/product2/product2.component';
import { Product3Component } from './Components/product3/product3.component';
import { Step9Component } from './Components/step9/step9.component';
import { Stept7Component } from './Components/stept7/stept7.component';
import { Stept1Component } from './Components/stept1/stept1.component';
import { LoginComponent } from './Components/auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './Components//auth/logout/logout.component';
import { AuthGuard } from './Components/auth/guards/guard.guard';





@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    Step3Component,
    Step4Component,
    Step5Component,
    Step6Component,
    Step7Component,
    Step8Component,
    Step2Component,
    VolkasoComponent,
    Product1Component,
    Product2Component,
    Product3Component,
    Step9Component,
    Stept7Component,
    Stept1Component,
    LoginComponent,
    LogoutComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  ,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
