import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
    console.log("in constructor() function of loginComponent");
   }

  ngOnInit() {
    console.log("in ngOnInit() function of loginComponent");
  }

}
