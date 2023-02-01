import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step9',
  template: `
    <button (click)="sendData()">Send Data</button>
  `,
  styles: []
})
export class Step9Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sendData() {



    const apiUrl = '/hs/postCustomer?';
    const apiKey = '6c97c113-6328-44bc-8a70-4e3f06010188';
    const customerData = {
      "customerData": {   
      "city": "Koeln",
      "email": "meier.klaus2@test-data.de" ,
      "firstName": "Klaus2",
      "lastName": "Meier2" ,
      "phoneNumber": "jjjjjj",
      "postalCode": "50679" ,
      "street": "Hauptstraße 123"
      },
      "insuranceData": {
        "hsn": "0005",
        "tsn": "ALQ",
        "vin": "1B7GG23Y1NS526835",
        "lp": "K-XX 354",
        "currentInsurer": "Allianz",
        "insurenceClass": "Vollkasko",
        "tarif": "300",
        "iban": "DE86500105176262346874"
      }
    };

    fetch(apiUrl, {
      method: 'POST',
      headers: new Headers ({
        'Content-Type': 'application/json',
        'Content-Length': '<calculated when request is sent>',
        'Host': '<calculated when request is sent>',
        'apikey': apiKey  
      }),
 
      body: JSON.stringify(customerData)
    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.error(error);
    });
  }

}

