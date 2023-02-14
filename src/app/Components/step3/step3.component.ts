import { Component, OnInit } from '@angular/core';
import { Mata } from 'src/Mata';
import { Router } from '@angular/router';
import { lp } from 'src/app/lp';



@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {

  pl : lp = new lp() ;

  numValue  = 0 ; 


validateLength(value: number) {
  if (value && value.toString().length > 4) {
    this.numValue = parseInt(value.toString().slice(0, 4));
  }
}

inputValues = ['', '', '' ,''];
showErrorMessage = [false, false, false , false];


checkInput() {
  this.showErrorMessage = [false, false, false , false];
  for (let i = 0; i < this.inputValues.length; i++) {
    if (this.inputValues[i].length === 0) {
      this.showErrorMessage[i] = true;
    }
  }
  if (this.showErrorMessage.filter(val => val).length === 0) {
    this.router.navigateByUrl('/step4', {state: {mata: this.receivedData}});
  }
}




  mata !: Mata ; 

  receivedData !: Mata  ; 

  constructor(private router : Router) { }



 ngOnInit(): void {
  let date  = new Date () ; 
this.mata = new Mata ('','','','',date,'','',date ,'' ,'' ,'' ,'',''  ,'' ,'' ,date,'' ,'' ,'','' ,''
  )  ;  
    if (history.state.mata){
      this.receivedData = history.state.mata as Mata  ; 
      console.log('receivedData' , this.receivedData) ; 
 
    }
    window.scrollTo(0, 0);
  

  }
  

 
setData(){
  this.receivedData.hsn = this.mata.hsn  ; 
  this.receivedData.tsn = this.mata.tsn  ; 
  this.receivedData.fin = this.mata.fin  ; 
  this.receivedData.lp =  this.mata.lp  ; 



  
  
}
}
