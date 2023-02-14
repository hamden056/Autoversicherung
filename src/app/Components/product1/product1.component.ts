import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mata } from 'src/Mata';
import { lp } from 'src/app/lp';
@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {



  pl : lp =new lp () ; 

  

changeColor1(event : Event) {
  let buttons = document.querySelectorAll('button');

  // Reset the border color of all buttons
  buttons.forEach(button => button.style.borderColor = 'white');

  // Change the border color of the clicked button

  (event.target as HTMLElement).style.borderColor = '#f0906a';
  (event.target as HTMLElement).style.borderWidth = '2.5px';
  (event.target as HTMLElement).style.borderStyle = 'solid';
  



}
changeColor2(event : Event) {
  let buttons = document.querySelectorAll('button');

  // Reset the border color of all buttons
  buttons.forEach(button => button.style.borderColor = 'white');

  // Change the border color of the clicked button

  (event.target as HTMLElement).style.borderColor = 'rgb(41, 66, 230)';
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

    this.mata.tarifo = "Glückspilz" ; 
  }
  setTarif2() {
 
    this.mata.tarifo = "Normalo" ; 

  }
  setTarif3() {
 
    this.mata.tarifo = "Tollpatsch" ; 

  }
  set300(){
    this.mata.tarif = "300€" ;  
  }
  set500() {
 this.mata.tarif = "500€" ; 
  }
  set1000(){
    this.mata.tarif = "1000€" ; 

  }
  set0(){
     
    this.mata.tarif = "0€" ; 

  }

  setgrosserals1000(){
    this.mata.tarif = ">1000€" ; 

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


