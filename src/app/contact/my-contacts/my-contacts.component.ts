import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ContactService } from '../contact.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  templateUrl: './my-contacts.component.html',
  styleUrls: ['./my-contacts.component.css']
})
export class MyContactsComponent implements OnInit, AfterViewInit {

  contacts: Array<any> = [];  
  displayedColumns = ['name', 'email', 'phone', 'Edit', 'select'];
  dataSource: any;
  @ViewChild(MatSort) sort: MatSort;
  selection: any = undefined;
  
  constructor(private _contactService: ContactService) {}

  ngOnInit() {
    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<string>(allowMultiSelect, initialSelection);  
  }

  ngAfterViewInit() {
    this.getContacts();
  }

  //get all contacts
  private getContacts(){
    this._contactService.getContacts()
    .subscribe(res => {
      this.contacts = res.data;
      this.dataSource = new MatTableDataSource(this.createRowData());
      this.dataSource.connect();
      this.dataSource.sort = this.sort;
    },
    error => {
      console.error(error);
    });
  }

  private createRowData(){
    let rows: Element[] = [];
    for(let i=0; i<this.contacts.length; i++){
      let row: Element = {"name": "", "email": "", phone: "", id: ""};
      row['name'] = this.contacts[i].name;
      row['email'] = this.contacts[i].email;
      row['phone'] = this.contacts[i].phone;
      row['id'] = this.contacts[i]._id;
      rows.push(row);
    }
    return rows;
  }  

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  //Delete selected contacts
  deleteSelectedContacts(){
    let selectedVal = this.selection;
    this._contactService.deleteContacts(this.selection.selected).subscribe(
      next => {
        console.log("Selected contacts deleted successfully in deleteSelectedContacts() in my-contacts.component");
        if(next['data'].n > 0){
          this.getContacts();
        }
      },
      error => {
        console.error(error);
      },
      () => {
        console.log("Selected contacts deletion finished in deleteSelectedContacts() in my-contacts.component");
      }
    );
  }

}

interface Element {
  name: string;
  email: string;
  phone: string;
  id: string;
}
