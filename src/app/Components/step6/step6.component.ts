import { Component, OnInit } from '@angular/core';
import { Mata } from 'src/Mata';
import { Router } from '@angular/router';
@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.css']
})
export class Step6Component implements OnInit {

  
  mata !: Mata ; 
  receivedData !: Mata  ; 

  constructor(private router : Router) { }

  changeColor(event : Event) {
    let buttons = document.querySelectorAll('button');
  
    // Reset the border color of all buttons
    buttons.forEach(button => button.style.borderColor = 'white');
  
    // Change the border color of the clicked button
  
    (event.target as HTMLElement).style.borderColor = '#f0906a';
    (event.target as HTMLElement).style.borderWidth = '2.5px';
    (event.target as HTMLElement).style.borderStyle = 'solid';
    
  
  
  
  }

  gotoPage7() {


    this.receivedData.iban = this.mata.iban ; 

   this.router.navigateByUrl('/step7' , {state : {mata : this.receivedData}})
   
   console.log('receivedData' , this.receivedData) ; 
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
  
  }
  
    

