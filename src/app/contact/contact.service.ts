import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ContactModel } from './contact-model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class ContactService {

  result: any;

  constructor(
    private _http: Http, 
    private _httpClient: HttpClient
  ) { }

  //To get all contacts of a logged in user
  getContacts(){
    /*return this._httpClient.get('/api/contacts').pipe(map(result => {
      //this.result = result.json().data
      this.result = result;
    }));*/
    return this._httpClient.get<any>('/api/contacts');
  }

  //To create a new contact
  createContact(model: ContactModel){
    let url = "/api/addContact";
    return this._httpClient.post<ContactModel>(url, this.cleanModel(model), httpOptions);
  }

  //To update a contact detail
  updateContact(model: ContactModel){
    let url = "/api/updateContact";
    let cleanedModel = this.cleanModel(model);
    cleanedModel['_id'] = model._id;
    return this._httpClient.put<ContactModel>(url, cleanedModel, httpOptions);
  }

  /**
   * get contact details of a contact
   * @param id 
   */
  getContactDetail(id: string){
    let url = "/api/contactDetail/"+id;
    return this._httpClient.get<any>(url);
  }

  //To delete selected contacts
  deleteContacts(selectedRecords: Array<any>){
    let url: string = "/api/deleteContacts";
    return this._httpClient.post(url, selectedRecords, httpOptions);
  }  

  //To clarify a contact details
  private cleanModel(model: ContactModel){
    return {
      userId: model.userId,
      name: model.name,
      email: model.email,
      phone: model.phone,
      address: model.address,
      income: model.income,
      createdDate: model.createdDate,
      modifiedDate: model.modifiedDate
    };
  }
  
}
