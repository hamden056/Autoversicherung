import { Component, OnInit } from '@angular/core';
import { Mata } from 'src/Mata';
import { Router } from '@angular/router';
import { lp } from 'src/app/lp';


@Component({
  selector: 'app-stept1',
  templateUrl: './stept1.component.html',
  styleUrls: ['./stept1.component.css']
})
export class Stept1Component implements OnInit {



  pl : lp = new lp() ; 

  inputValues = ['', ''];

  showErrorMessage = false;
  
  

  
checkInput() {
  if (this.inputValues.filter(val => val.length === 0).length > 0) {
    this.showErrorMessage = true;
  } else {


this.router.navigateByUrl('/step3' , {state : {mata : this.receivedData}})
  }
}



changeColor(event : Event) {
  let buttons = document.querySelectorAll('button');

  // Reset the border color of all buttons
  buttons.forEach(button => button.style.borderColor = 'white');

  // Change the border color of the clicked button

  (event.target as HTMLElement).style.borderColor = '#f0906a';
  (event.target as HTMLElement).style.borderWidth = '2.5px';
  (event.target as HTMLElement).style.borderStyle = 'solid';
  



}

isSelected = false;

changeBorderColor() {
  this.isSelected = !this.isSelected;
}

selectedCard !: number;

  selectCard(card: number) {
    this.selectedCard = card;
  }
  mata !: Mata ; 
  receivedData !: Mata  ; 

  constructor(private router : Router) { }

  setTarif1() {
    this.mata.tarif = "300€" ;  
    this.mata.tarifo = "Glückspilz" ; 
  }
  setTarif2() {
    this.mata.tarif = "500€" ;  
    this.mata.tarifo = "Normalo" ; 

  }
  setTarif3() {
    this.mata.tarif = "1000€" ;  
    this.mata.tarifo = "Tollpatsch" ; 

  }
  
  setHaftpflicht(){ 
    this.mata.aktuelle_versicherung  = "Haftpflicht" ;  
  }
  setTeilkasko() {
    this.mata.aktuelle_versicherung = "Teilkasko" ;  
  }
  setVolkasko(){
    this.mata.aktuelle_versicherung = "Volkasko"
  }


 gotoPage2() {
  console.log('send data'  , this.mata)
 this.router.navigateByUrl('/step2' , {state : {mata : this.mata}})
 }


 ngOnInit(): void {
  let date  = new Date () ; 
  this.mata = new Mata ('','','','',date,'','',date ,'' ,'' ,'' ,'',''  ,'' ,'' ,date,'' ,'' ,'','' ,''
  )  ; 
  if (history.state.mata){
    this.receivedData = history.state.mata as Mata  ; 
    console.log('receivedData' , this.receivedData) ; 
  }
}


  
}




