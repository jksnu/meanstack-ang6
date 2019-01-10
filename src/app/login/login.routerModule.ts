import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent, 
        children: [
            {path: 'myprofile', component: MyprofileComponent},
            {path: 'createProfileForm', component: CreateProfileComponent},
            {path: 'authenticationForm', component: AuthenticationComponent},
            {path: 'changePasswordForm', component: ChangePasswordComponent},
            {path: 'editProfileForm', component: EditProfileComponent},
            {path: 'forgotPasswordForm', component: ForgotPasswordComponent},
            {path: 'logout', component: LogoutComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LoginRouterModule{};