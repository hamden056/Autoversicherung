import { Component, OnInit } from '@angular/core';
import { Mata } from 'src/Mata';
import { Router } from '@angular/router';
import { lp } from 'src/app/lp';

@Component({
  selector: 'app-step3',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {

  pl : lp = new lp() ;

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
  inputValues = ['', '', '', ''];
  showErrorMessage = [false, false, false, false];


  change1(){
    this.showErrorMessage[0]=false  ;
  
  }
  change2(){
    this.showErrorMessage[1] =false ; 

  }
  change3(){
    this.showErrorMessage[2] =false ; 
  }
  
 change4(){
  this.showErrorMessage[3] = false ; 
 }
  
  checkInput1(){
    this.showErrorMessage[0] = true ; 

  }
  checkInput2(){
    this.showErrorMessage[1]=true ; 
  }
  checkInput3(){
    this.showErrorMessage[2] = true ; 

  }
  checkInput4(){
    this.showErrorMessage[3]=true ; 
  }
  
  chek(){
     if (!this.showErrorMessage[0]&&!this.showErrorMessage[1]&&!this.showErrorMessage[2]&&!this.showErrorMessage[3]){
      console.log('send data'  , this.receivedData)
       this.router.navigateByUrl('/step5' , {state : {mata : this.receivedData}})

     }
     else {
      this.router.navigateByUrl('/step4' , {state : {mata : this.receivedData}})

     }
     
  }


 
 mata !: Mata ; 
  receivedData !: Mata  ; 

  constructor(private router : Router) { }

 gotoPage5() {

 

}

 ngOnInit(): void {
  let date  = new Date () ; 
  this.mata = new Mata ('','','','',date,'','',date ,'' ,'' ,'' ,'',''  ,'' ,'' ,date,'' ,'' ,'','' ,''
  )  ; 
  if (history.state.mata){

    this.receivedData = history.state.mata as Mata  ; 
      console.log('receivedData' , this.receivedData) ; 
    }
  
    window.scrollTo(0, 0);

  }
}
    
    
    
    


