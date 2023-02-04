import { Component, OnInit } from '@angular/core';
import { Mata } from 'src/Mata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step3',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {

  selectedButton1 = '';
  selectedButton2 = '';
  selectedButton3 = '';
  selectedButton4 = '';

  changeColor(event: Event, question: string) {
    if (question === 'question1') {
      this.selectedButton1 = (event.target as HTMLButtonElement).innerText;
    } else {
      this.selectedButton2 = (event.target as HTMLButtonElement).innerText;
    }
   
  }
  changeColor2(event: Event, question: string) {
    if (question === 'question3') {
      this.selectedButton3= (event.target as HTMLButtonElement).innerText;
    } else {
      this.selectedButton4= (event.target as HTMLButtonElement).innerText;
    }
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
    
    
    
    


