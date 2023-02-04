import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mata } from 'src/Mata';
@Component({
  selector: 'app-step7',
  templateUrl: './step7.component.html',
  styleUrls: ['./step7.component.css']
})
export class Step7Component implements OnInit {

  inputValues = ['', '', ''];
  showErrorMessage = false;
  mata !: Mata ; 

  receivedData !: Mata  ; 

  constructor(private router : Router) { }


gotoPage8(){
    
  
    this.router.navigateByUrl('/step8' , {state : {mata : this.receivedData}}) ;
    console.log(this.receivedData) ;
    }



ngOnInit(): void {

  let date  = new Date () ; 
  this.mata = new Mata ('','','','',date,'','',date ,'' ,'' ,'' ,'' ,''  ,'' ,'' ,date,'' ,'' ,'','' ,''
  )  ;  

    if (history.state.mata){
      this.receivedData = history.state.mata as Mata  ;   
      console.log('receivedData' , this.receivedData) ; 
    }

  }

  checkInput() {
    if (this.inputValues.filter(val => val.length === 0).length > 0) {
      this.showErrorMessage = true;
    } else {
  
  
  this.router.navigateByUrl('/step3' , {state : {mata : this.receivedData}})
    }
  }
   
  setData(){
    this.receivedData.versicherungsbeginn = this.mata.versicherungsbeginn  ;
    this.receivedData.hauptfaelligkeit = this.mata.hauptfaelligkeit  ;
    this.receivedData.aktueller_versicherer  = this.mata.aktueller_versicherer  ;
  
  }

}