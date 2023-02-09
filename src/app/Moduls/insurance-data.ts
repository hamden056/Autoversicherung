import { lp } from "../lp";

export class InsuranceData {

    
    hsn !: string ; 
    tsn !: string ; 
    vin !: string ; 
    lp !: lp; 
    currentInsurer !: string ; 
    insurenceClass !: string ; 
    tarif !: string ; 
    iban !: string ;
    
   
    constructor(hsn :  string , tsn : string  , vin :string , lp : lp , 
        currentInsurer :  string  , insurenceClass :  string  ,
        tarif : string , iban :  string )
        {}
}
