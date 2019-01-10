import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ContactModel } from '../contact-model';
import { ContactService } from '../contact.service';
import { ContactConstant } from '../contact-constant';

@Component({
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  constructor(
    private datePipe: DatePipe,
    private contactService: ContactService
  ) { }

  model: ContactModel;  

  contactFormSubmitHandler(){
    console.log("Executing the contactFormSubmitHandler");
    this.model.createdDate = this.model.modifiedDate;
    this.contactService.createContact(this.model).subscribe(
      data => {
        console.log("New contact is sucessfully added by contactFormSubmitHandler");
        this.model.isContactAdded = true;
        this.model.userId = "";
        this.model.name = "";
        this.model.email = "";
        this.model.phone = "";
        this.model.address = "";
        this.model.income = 0;
        this.model.createdDate = this.datePipe.transform(new Date(), ContactConstant.DATE_FORMAT);
        this.model.modifiedDate = this.model.createdDate;
      },
      err => {
        console.error(err);
      },
      () => {
        console.log("data is loading in contactFormSubmitHandler");
      }
    );
  }

  ngOnInit() {
    this.model = new ContactModel();
    this.model.createdDate = this.datePipe.transform(new Date(), ContactConstant.DATE_FORMAT);
    this.model.modifiedDate = this.model.createdDate;
  }

}
