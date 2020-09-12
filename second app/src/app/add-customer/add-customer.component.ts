import { Component, OnInit } from '@angular/core';
import {CustomerDetailsComponent} from '../customer-details/customer-details.component';
import { User } from '../model/user';

@Component({
  selector: 'add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {

  constructor() { }


  user:User=undefined;

  addCustomer(form:any){
    let data=form.value;
   let balance=data.balance;
    let customername=data.customername;
    this.user=new User(customername,balance);
    console.log("user initialized="+this.user.balance);
   }
 
}
