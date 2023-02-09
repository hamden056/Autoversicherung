import { lp } from "./app/lp";

export class Mata {
    aktuelle_versicherung !: string ; 
    tarif !: string ; 
    tarifo!: string ; 
    hauptfaelligkeit ! : Date ; 
    aktueller_versicherer ! :string ; 
    versicherungsbeginn !: Date ; 




    hsn !: string ; 
    tsn !: string ; 
    fin !: string ; 
    lp !:  lp  ; 
    
    title !:string ; 
    anrede !: string ; 
    vorname !: string ; 
    nachname !: string ; 
    geburtsdatum !: Date ; 
    strasse !: string ; 
    ort !: string ; 
    postleitzahl !: string ; 
    telefonnummer !: string ; 
    email !: string ; 
   
    iban !: string ; 
  
    

    constructor(iban : string ,title : string , tarif : string  , tarifo : string ,versicherungsbeginn:Date ,    aktuelle_versicherung : string  , aktueller_versicherer : string 
        ,hauptfaelligkeit : Date , hsn : string , tsn : string , fin :string  , lp :lp
        ,andere : string , vorname : string , nachname :string ,geburtsdatum : Date , strasse : string ,
        ort: string ,  postleitzahl  : string , telefonnummer : string , email : string 
    )
       {}

}