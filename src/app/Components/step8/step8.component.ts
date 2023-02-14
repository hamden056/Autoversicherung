

import { Customer } from 'src/app/Moduls/customer';
import { lp } from 'src/app/lp';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomerData } from 'src/app/Moduls/customer-data';
import { InsuranceData } from 'src/app/Moduls/insurance-data';
import { Mata } from 'src/Mata';
@Component({
  selector: 'app-step8',
  templateUrl: './step8.component.html',
  styleUrls: ['./step8.component.css']
})



export class Step8Component implements OnInit {


  pl : lp  = new lp () ; 


  customer !: Customer ;
  
  customerData !: CustomerData ; 

  insuranceData !: InsuranceData ; 

  mata !: Mata ; 

  receivedData !: Mata  ; 


  constructor(private router : Router , ) { }




  sendData() {
   
    const apiUrl = '/hs/postCustomer?';
    const apiKey = '';


    
      
  
  let date  = new Date () ; 

   const  customerData_  = new  CustomerData('' ,'' ,'' ,'' ,'' ,'','') ;
   const insuranceData_  = new InsuranceData('' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ) ;
 
   //SetCustomerData

   customerData_.city = this.receivedData.ort ; 
   customerData_.email = this.receivedData.email ; 
   customerData_.firstName = this.receivedData.vorname ; 
   customerData_.lastName = this.receivedData.nachname ; 
   customerData_.phoneNumber = this.receivedData.telefonnummer ; 
   customerData_.postalCode = this.receivedData.postleitzahl ; 
   customerData_.street = this.receivedData.strasse ; 
 
   //SetInsuranceData

   insuranceData_.hsn = this.receivedData.hsn ; 
   insuranceData_.tsn = this.receivedData.tsn ; 
   insuranceData_.vin = this.receivedData.fin ; 
   insuranceData_.lp = this.receivedData.lp; 
  // insuranceData_.lp.lp2 = this.receivedData.lp.lp2 ; 
  // insuranceData_.lp.lp3 = this.receivedData.lp.lp3  ; 
   insuranceData_.currentInsurer = "ADAC Autoversicherung AG" ; 
   insuranceData_.insurenceClass = this.receivedData.aktuelle_versicherung ; 
   insuranceData_.tarif = this.receivedData.tarif ; 
   insuranceData_.iban = "DE637463763"  ;  

   //SetCustomer

 
  const  mody = JSON.stringify({
    "customerData" : customerData_ ,
    "insuranceData": insuranceData_ 
  })


    fetch(apiUrl, {
      method: 'POST',
      headers: new Headers ({
        'Content-Type': 'application/json',
        'Content-Length': '<calculated when request is sent>',
        'Host': '<calculated when request is sent>',
        'apikey': apiKey  
      }),
 
      body: JSON.stringify({
        "customerData" : customerData_ ,
        "insuranceData": insuranceData_ 
      }
      )
    }).then(response => {
      console.log(response);
      console.log(mody) ;
      console.log(this.receivedData)
  
    }).catch(error => {
      console.error(error);
    });
    
   this.receivedData.iban = this.mata.iban ; 
   this.router.navigateByUrl('/step1' , {state : {mata : this.receivedData}}) ;
  
  }

 gotoPage1(){

  console.log(this.receivedData) ;
  


   }
 
    

  ngOnInit(): void {

    let date  = new Date () ; 
    this.mata = new Mata ('','','','',date,'','',date ,'' ,'' ,'' , '',''  ,'' ,'' ,date,'' ,'' ,'','' ,''
    )  ; 

    this.insuranceData  = new InsuranceData('' ,'' ,'' , '' ,'' ,'' ,'' ,'' ) ;
    this.customerData  = new  CustomerData('' ,'' ,'' ,'' ,'' ,'','') ;
    
    this.customer = new Customer(this.customerData ,this.insuranceData) ; 
    
  if (history.state.mata){
    this.receivedData = history.state.mata as Mata  ;   
    console.log('receivedData' , this.receivedData) ; 
  
 }
  }


}

