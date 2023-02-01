import { Component, OnInit } from '@angular/core';
import { Mata } from 'src/Mata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step3',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {

  

  changeColor(event : Event) {
    let buttons = document.querySelectorAll('button');
  
    // Reset the border color of all buttons
    buttons.forEach(button => button.style.borderColor = 'white');
  
    // Change the border color of the clicked button
  
    (event.target as HTMLElement).style.borderColor = '#f0906a';
    (event.target as HTMLElement).style.borderWidth = '2.5px';
    (event.target as HTMLElement).style.borderStyle = 'solid';
    
  
  
  
  }

  
  mata !: Mata ; 
  receivedData !: Mata  ; 

  constructor(private router : Router) { }

 gotoPage5() {

 console.log('send data'  , this.receivedData)
 this.router.navigateByUrl('/step5' , {state : {mata : this.receivedData}})

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
    
    
    
    


