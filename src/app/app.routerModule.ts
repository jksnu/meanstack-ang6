import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {path: '', loadChildren: 'app/home/home.module#HomeModule'},
    {path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
    {path: 'profile', loadChildren: 'app/login/login.module#LoginModule'},    
    {path: 'contacts', loadChildren: 'app/contact/contact.module#ContactModule'}  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}