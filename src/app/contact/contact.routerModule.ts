import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { MyContactsComponent } from './my-contacts/my-contacts.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { WebsocketCompTestComponent } from './websocket-comp-test/websocket-comp-test.component';

const routes: Routes = [
    {
        path: '',
        component: ContactComponent,
        children: [
            {path: 'myContacts', component: MyContactsComponent},
            {path: 'editContacts/:id', component: EditContactComponent},
            {path: 'deleteContacts', component: DeleteContactComponent},
            {path: 'createContactForm', component: CreateContactComponent},
            {path: 'Websocket-contact', component: WebsocketCompTestComponent}
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ContactRouterModule{}