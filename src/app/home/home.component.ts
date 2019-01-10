import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
    console.log("in constructor() function of HomeComponent");
  }

  ngOnInit() {
    console.log("in ngOnInit() function of HomeComponent");
  }

}
