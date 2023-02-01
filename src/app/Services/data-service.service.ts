import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }


  private data = {

    name  : ''  ,
    number :'' , 
    email : '' ,
    iban  : ''
   
   } 
  
      setData(name : string , number  : string , email : string , iban: string ) {
        
      this.data.name =name ; 
      this.data.number = number ; 
      this.data.email = email ; 
      this.data.iban  = iban ;   
     
      }
      getData() {
        return this.data ; 
      }
  
  


}
