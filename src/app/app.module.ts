import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { CRUDEmployeComponent } from './Employees/crud-employe/crud-employe.component';
import { NavBarHeaderComponent } from './header/nav-bar-header/nav-bar-header.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetPwdComponent } from './user/reset-pwd/reset-pwd.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    CRUDEmployeComponent,
    NavBarHeaderComponent,
    UploadImageComponent,
    CreateProfileComponent,
    ResetPwdComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
