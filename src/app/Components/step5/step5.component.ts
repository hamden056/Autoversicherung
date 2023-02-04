import { Component, OnInit } from '@angular/core';
import { Mata } from 'src/Mata';
import { Router } from '@angular/router';
@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.css']
})
export class Step5Component implements OnInit {


  
  inputValues = ['', '', '','', '' ,'','',''];
  showErrorMessage = false;

  mata !: Mata ; 
  receivedData !: Mata  ; 

  constructor(private router : Router) { }

 gotoPage6() {
  
 this.router.navigateByUrl('/step6' , {state : {mata : this.receivedData}})
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





checkInput() {


       this.router.navigateByUrl('/step6' , {state : {mata : this.receivedData}})

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