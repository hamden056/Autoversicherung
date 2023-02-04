import { Component, OnInit } from '@angular/core';
import { Mata } from 'src/Mata';
import { Router } from '@angular/router';



@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {

  mata !: Mata ; 
  receivedData !: Mata  ; 

  constructor(private router : Router) { }

 gotoPage4() {

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
  
  inputValues = ['', '', '',''];
  showErrorMessage = false;



checkInput() {
  if (this.inputValues.filter(val => val.length === 0).length > 0) {
    this.showErrorMessage = true;
  } else {

       this.router.navigateByUrl('/step4' , {state : {mata : this.receivedData}})
  }
}
 
setData(){
  this.receivedData.hsn = this.mata.hsn  ; 
  this.receivedData.tsn = this.mata.tsn  ; 
  this.receivedData.fin = this.mata.fin  ; 
  this.receivedData.lp =  "K-XX 354"  ; 
  console.log('send data'  , this.receivedData)

}
}
