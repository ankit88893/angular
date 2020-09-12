import { Component, OnInit } from '@angular/core';
import {User} from '../model/user'
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent  {

  constructor() { }



  user1:User=new User('anuj gupta',1000);
  user2:User=new User('ayushi dubey',2000);

    link ="http://joinindianarmy.nic.in/Authentication.aspx";
  // user3:User=new User('customer3',3000);
  // user4:User=new User('customer4',4000);



}
