export class User{
    customername:string;
    balance:number;
    
    constructor(customername : string , balance:number){
      this.customername=customername;
      this.balance=balance;
    }
  
    getCustomerName():string{
      return this.customername;
    }
  
    getBalance():number{
      return this.balance;
    }
  
  }
  