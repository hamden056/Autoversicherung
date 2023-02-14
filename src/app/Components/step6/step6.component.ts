import { Component, OnInit } from '@angular/core';
import { Mata } from 'src/Mata';
import { Router } from '@angular/router';
import { lp } from 'src/app/lp';

@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.css']
})
export class Step6Component implements OnInit {


  pl : lp = new lp() ;


  inputValues = [''];
  showErrorMessage = false;

  mata !: Mata ; 
  receivedData !: Mata  ; 

  constructor(private router : Router) { }
 

  inputValues2 = ['', '']
  showErrorMessage2 = [false, false ];




  selectedButton1 = '';
  selectedButton2 = '';

  changeColor(event: Event, question: string) {
    if (question === 'question1') {
      this.selectedButton1 = (event.target as HTMLButtonElement).innerText;
    } else {
      this.selectedButton2 = (event.target as HTMLButtonElement).innerText;
    }
  }

  change1(){
    this.showErrorMessage2[0]=false  ;
  
  }
  change2(){
    this.showErrorMessage2[1] =false ; 

  }
   
  checkInput1(){
    this.showErrorMessage2[0] = true ; 

  }
  checkInput2(){
    this.showErrorMessage2[1]=true ; 
  }
    
   ngOnInit(): void {
  let date  = new Date () ; 
  this.mata = new Mata ('','','','',date,'','',date ,'' ,'' ,'' ,'' ,''  ,'' ,'' ,date,'' ,'' ,'','' ,''
  )  ; 
    if (history.state.mata){
        this.receivedData = history.state.mata as Mata  ;   
        console.log('receivedData' , this.receivedData) ; 
      }
      window.scrollTo(0, 0);
    
    }

    valid!: boolean;
    eheh:  boolean =false ; 

    ada : boolean = true ;

    inputValues3 = [''];
    showErrorMessage3 = [false];

    checkInput() {
      this.showErrorMessage3= [false, false, false];
      for (let i = 0; i < this.inputValues.length; i++) {
        if (this.inputValues3[i].length === 0) {
          this.showErrorMessage3[i] = true;
        }
      }
      if (this.showErrorMessage3.filter(val => val).length === 0) {
        this.router.navigateByUrl('/step7', {state: {mata: this.receivedData}});
      }
    }
    goTopage7(){
      if(this.validateIban())
      this.router.navigateByUrl('/step7', {state: {mata: this.receivedData}});
     else 
      this.ada = false;

     }
     
    

    checkInput_() {
      if (this.iban.length === 0) {
        this.ibaninp = true;
      } else if (!this.validateIban()) {
        this.eheh = false;
      } else {
       
        this.router.navigateByUrl('/step7', { state: { mata: this.receivedData } });
      }
    }
    


    
    
    
    inputValue!: string; 
    ibaninp : boolean = false ; 

    setData(){
     
    this.receivedData.iban = this.mata.iban ; 
    
    }
 
    ibano(){
      this.ibaninp = true ; 
    }
    
    iban!: string;

  
    validateIban() {
    return this.iban.length >= 15 && this.iban.length <= 34 && this.iban.startsWith('DE');
 
    }
   
  
  }
  
    

