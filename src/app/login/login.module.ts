import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRouterModule } from './login.routerModule';
import { LoginComponent } from './login.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';

@NgModule({
    imports: [LoginRouterModule, FormsModule],
    declarations: [LoginComponent, MyprofileComponent, CreateProfileComponent, EditProfileComponent, ChangePasswordComponent, ForgotPasswordComponent, AuthenticationComponent, LogoutComponent, ProfileSidebarComponent]    
})

export class LoginModule{}