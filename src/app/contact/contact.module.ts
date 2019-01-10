import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatTableModule, MatSortModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { ContactService } from './contact.service';
import { WebsocketContactService } from './websocket.contact.service';
import { ContactComponent } from './contact.component';
import { ContactRouterModule } from './contact.routerModule';
import { MyContactsComponent } from './my-contacts/my-contacts.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { WebsocketCompTestComponent } from './websocket-comp-test/websocket-comp-test.component';
import { ContactSidebarComponent } from './contact-sidebar/contact-sidebar.component';

@NgModule({
  imports: [ 
    CommonModule,
    MatTableModule, 
    MatSortModule, 
    MatCheckboxModule,
    FormsModule,
    ContactRouterModule
  ],
  declarations: [
    ContactComponent, 
    MyContactsComponent, 
    CreateContactComponent, 
    EditContactComponent, 
    DeleteContactComponent, 
    WebsocketCompTestComponent, 
    ContactSidebarComponent
  ],
  providers: [
    DatePipe,
    ContactService,
    WebsocketContactService
  ]
})
export class ContactModule { }
