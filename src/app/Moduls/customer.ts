
import { CustomerData } from "./customer-data";
import { InsuranceData } from "./insurance-data";

export class Customer {

    customerData !: CustomerData ; 
    insuranceData !: InsuranceData ; 


constructor(customerData: CustomerData , insuranceData  : InsuranceData) {}
}
