import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ContactService } from './contact.service';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private datePipe: DatePipe,
    private contactService: ContactService
  ) { 
    console.log("in constructor() function of contactComponent");
  }

  ngOnInit() {
    console.log("in ngOnInit() function of contactComponent");
  }

}
