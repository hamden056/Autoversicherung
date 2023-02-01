import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/Services/data-service.service';
import { Mata } from 'src/Mata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  template : `
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="step2.component.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">

</head>
<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid menu">
          <a class="navbar-brand" href="#"><img class="img-fluid" src="./Unbenannt-3.png" alt=""></a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li><a href="#"><i class="fa-solid fa-magnifying-glass"></i></a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6 col-md-6 pt-3">
                <h1 class="text-center">Bittte beschreibe  uns deine Aktuelle Versicherungssituation</h1>
            </div>
        </div>
      </div>
    <div class="container">
        <div class="row justify-content-center pt-5">
            <div class="col-lg-6 col-md-6">
               <div class="form">
                <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Versicherungsbeginn</label>
                        <br>
                        <input   class="form-control shadow-none"   name="Versicherungsbeginn" type="Date"  [(ngModel)]="mata.versicherungsbeginn"  >
                      </div>
                      <br>
                      <div class="mb-3">
                        <label  for="exampleFormControlInput1" class="form-label">Wie ist dein Fahrzeug aktuell versichert?</label>
                        <br>
                          <select class="form-select form-select-lg mb-3" >
                            <option value="Herr">Select ..</option>
                            <option value="Frau" [(ngModel)]="mata.aktueller_versicherer"  >AachenMünchener Versicherung AG</option>
                            <option value="Divers">ADAC Autoversicherung AG</option>
                            <option value="Divers">ADLER Versicherung AG</option>
                            <option value="Divers">AXA Versicherung AG</option>
                            <option value="Divers">Chartis Europe S.A.</option>
                            <option value="Divers">DEVK Fast Lane</option>
                            <option value="Divers">Generali Versicherung AG</option>
                            <option value="Frau" [(ngModel)]="mata.aktueller_versicherer"  >AachenMünchener Versicherung AG</option>
                            <option value="Divers">Badische Allgemeine Versicherung AG</option>
                            <option value="Divers">Baremenia Allgemeine Versicherung-AG</option>
                            <option value="Divers">Basler Gemeinde-Versicherungs-Verband</option>
                            <option value="Divers">Basler Securitas Versicherung-AG</option>
                            <option value="Divers">BAYERISCHE BEAMTEN VERSICHERUNG</option>
                            <option value="Divers">ADLER Versicherung AG</option>
                            <option value="Divers">AXA Versicherung AG</option>
                            <option value="Divers">Chartis Europe S.A.</option>
                            <option value="Divers">DEVK Fast Lane</option>
                            <option value="Divers">Generali Versicherung AG</option>
                            
                            
                          </select>  
                        </div>
                        <br>
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Hauptfälligkeit deiner Versicherung</label>
                    
                        <br>
                        <input type="Date"  class="form-control shadow-none"    name="faelligkeit"  [(ngModel)]="mata.hauptfaelligkeit"   >
                      </div>

               </div>
            </div>
        </div>
    </div>
    <div class="container">
      <div class="row justify-content-center py-5">
        <div class="col-lg-6 col-md-6">
          <p style="color: #f0906a;">Seit 2 von 6</p>
          <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg" style="width: 35%"></div>
          </div>
        </div>
      </div>
    </div>
     
    <div class="container">
        <div class="row justify-content-center text-center py-5">
            <div class="col-lg-6 col-md-6 col-sm-3">
                <button class ="top-btn" [routerLink]="['/step1']">Zurück</button>
                <button class ="top-btn top-btn2" (click)="gotoPage3()">Weiter</button>
            </div>
        </div>
    </div>

        
    <br>
</body>
</html>


  
  `
})
export class Step2Component implements OnInit {

  mata !: Mata ; 
  receivedData !: Mata  ; 

  constructor(private router : Router) { }

 gotoPage3() {
  
  this.receivedData.versicherungsbeginn = this.mata.versicherungsbeginn  ;
  this.receivedData.hauptfaelligkeit = this.mata.hauptfaelligkeit  ;
  this.receivedData.aktueller_versicherer = this.mata.aktueller_versicherer  ;


 this.router.navigateByUrl('/step3' , {state : {mata : this.receivedData}})
 }

 ngOnInit(): void {
  let date  = new Date () ; 
  this.mata = new Mata ('','','', '',date,'','',date ,'' ,'' ,'' ,'' ,''  ,'' ,'' ,date ,'' ,'' ,'','' ,''   )  ; 
  if (history.state.mata){
    this.receivedData = history.state.mata as Mata  ; 
    console.log('receivedData' , this.receivedData) ; 
  }
}



}
