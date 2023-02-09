import { Component, OnInit } from '@angular/core';
import { Mata } from 'src/Mata';
import { Router } from '@angular/router';
import { lp } from 'src/app/lp';

import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.css']
})
export class Step5Component implements OnInit {

  pl : lp = new lp() ;
  

  mata !: Mata ; 
  receivedData !: Mata  ; 

  constructor(private router : Router) { }

 gotoPage6() {
  
 this.router.navigateByUrl('/step6' , {state : {mata : this.receivedData}})
 }


 inputValue!: string;

 removeError() {
   this.inputValue = this.inputValue.trim();
 }

 isValidEmail(email: string) {
   // Returns true if email is in valid format, false otherwise
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(email);
 }

 submit() {
  if (!this.inputValue) {
    return alert('Please check your input');
  } else if (!this.isValidEmail(this.inputValue)) {
    return alert('Email is invalid');
  }

  // Perform submit logic
}
 

 ngOnInit(): void {
  let date  = new Date () ; 
  this.mata = new Mata ('','','','',date,'','',date ,'' ,'' ,'' ,this.pl ,''  ,'' ,'' ,date,'' ,'' ,'','' ,''
  )  ; 
  if (history.state.mata){
          this.receivedData = history.state.mata as Mata  ;   
      console.log('receivedData' , this.receivedData) ; 
    }
  
  }

  
  email!: string;
  valid!: boolean;

  validateEmail() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.valid = re.test(this.email);
  }
 




  

changeColor2(event : Event) {
  let buttons = document.querySelectorAll('button');

  // Reset the border color of all buttons
  buttons.forEach(button => button.style.borderColor = 'white');

  // Change the border color of the clicked button

  (event.target as HTMLElement).style.borderColor = 'rgb(41, 66, 230)';
  (event.target as HTMLElement).style.borderWidth = '1.7px';
  (event.target as HTMLElement).style.borderStyle = 'solid';
  
}
changeColor3(event : Event) {
  let buttons = document.querySelectorAll('button');

  // Reset the border color of all buttons
  buttons.forEach(button => button.style.borderColor = 'white');

  // Change the border color of the clicked button

  (event.target as HTMLElement).style.borderColor = '';
  (event.target as HTMLElement).style.borderWidth = '1.7px';
  (event.target as HTMLElement).style.borderStyle = 'solid';
  


  


}

setHerr(){
  this.receivedData.anrede ="Herr" ; 
}
setFrau() { 
  this.receivedData.anrede ="Frau" ; 
}
setDivers(){
  this.receivedData.anrede = "Divers"
}
setDr(){ 
  this.receivedData.title  = "Dr"; 
}
setProf() {
  this.receivedData.title = "Prof."
}
setDrmed(){
  this.receivedData.title ="Dr.med."
}
setProfDr() {
  this.receivedData.title = "Prof.Dr."
}

inputValues = ['', '', '', '','', '', '', ''];
showErrorMessage = [false, false, false, false, false, false, false, false];
  
checkInput() {
  this.showErrorMessage = [false, false, false];
  for (let i = 0; i < this.inputValues.length; i++) {
    if (this.inputValues[i].length === 0) {
      this.showErrorMessage[i] = true;
    }
  }
  if (this.showErrorMessage.filter(val => val).length === 0) {
    this.router.navigateByUrl('/step6', {state: {mata: this.receivedData}});
  }
}

emailinp : boolean = false ; 

emailo(){

this.emailinp = !this.emailinp ;

} 
setData(){
  this.receivedData.vorname = this.mata.vorname  ; 
  this.receivedData.nachname = this.mata.nachname  ; 
  this.receivedData.geburtsdatum = this.mata.geburtsdatum  ; 
  this.receivedData.strasse = this.mata.strasse  ; 
  this.receivedData.ort = this.mata.ort  ; 
  this.receivedData.postleitzahl = this.mata.postleitzahl  ; 
  this.receivedData.telefonnummer = this.mata.telefonnummer  ; 
  this.receivedData.email = this.mata.email  ; 
}



}