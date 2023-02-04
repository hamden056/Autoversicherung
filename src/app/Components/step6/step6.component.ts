import { Component, OnInit } from '@angular/core';
import { Mata } from 'src/Mata';
import { Router } from '@angular/router';
@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.css']
})
export class Step6Component implements OnInit {

  inputValues = [''];
  showErrorMessage = false;

  mata !: Mata ; 
  receivedData !: Mata  ; 

  constructor(private router : Router) { }


  selectedButton1 = '';
  selectedButton2 = '';

  changeColor(event: Event, question: string) {
    if (question === 'question1') {
      this.selectedButton1 = (event.target as HTMLButtonElement).innerText;
    } else {
      this.selectedButton2 = (event.target as HTMLButtonElement).innerText;
    }
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
    this.router.navigateByUrl('/step7' , {state : {mata : this.receivedData}})
      }
    }
     
    setData(){
     
    this.receivedData.iban = this.mata.iban ; 
    
    }
  
  }
  
    

