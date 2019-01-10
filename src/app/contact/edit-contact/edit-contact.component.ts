import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { ContactModel } from '../contact-model';
import { ContactService } from '../contact.service';
import { ContactConstant } from '../contact-constant';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  model: ContactModel = new ContactModel();

  constructor(
    private contactService: ContactService,
    private activatedRoute: ActivatedRoute,
    private datePipe: DatePipe
  ) {
    console.log("In constructor function of EditContactComponent");
  }

  ngOnInit() {
    console.log("In ngOnInit function of EditContactComponent");
    this.activatedRoute.paramMap.pipe(switchMap((params: ParamMap) => 
    this.contactService.getContactDetail(params.get('id'))))
      .subscribe(
        next => {
          this.model = this.populateContactModel(next.data);
        },
        error => {
          console.error(error);
        },
        () => {
          console.log("Contact details for a contact id is retreived in ngAfterViewInit function");
        }
      );
  }

  //update contact form submit handler
  contactFormUpdateHandler(){
    this.contactService.updateContact(this.model).subscribe(
      next => {
        console.log("Contact details modified successfully in contactFormUpdateHandler function in EditContactComponent");
        this.model.isContactAdded = true;
      },
      error => {
        this.model.isContactAdded = false;
        console.error(error);
      },
      () => {
        console.log("Contact details finished successfully in contactFormUpdateHandler function in EditContactComponent");
      }
    );
  }

  //To populate contact model
  private populateContactModel(resultObj){
    let contactModel = new ContactModel();
    contactModel._id = resultObj._id;
    contactModel.address = resultObj.address;
    contactModel.createdDate = this.datePipe.transform(resultObj.createdDate, ContactConstant.DATE_FORMAT);
    contactModel.email = resultObj.email;
    contactModel.income = resultObj.income;
    contactModel.isContactAdded = resultObj.isContactAdded;
    contactModel.modifiedDate = this.datePipe.transform(resultObj.modifiedDate, ContactConstant.DATE_FORMAT);
    contactModel.name = resultObj.name;
    contactModel.phone = resultObj.phone;
    contactModel.userId = resultObj.userId;
    return contactModel;
  }

  ngAfterViewInit(){
    console.log("In ngAfterViewInit function of EditContactComponent");    
  }

}
