import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
 import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  users:User[]=[
    new User("ankit",100),
    new User("anuj",200),
    new User("ayushi",300)
  ];
  
  eligibleColor:string="purple";
  notEligibleColor:string="maroon";

  color:string="white";
  isEligible(balance:number):boolean{
    return balance>=1;
  }


}
