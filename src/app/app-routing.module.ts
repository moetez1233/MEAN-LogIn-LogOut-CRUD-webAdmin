import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignUpComponent} from '../app/user/sign-up/sign-up.component'
import {UserComponent} from './user/user.component'
import {SignInComponent} from './user/sign-in/sign-in.component'
import {NavBarHeaderComponent} from './header/nav-bar-header/nav-bar-header.component'
import {CRUDEmployeComponent} from '../app/Employees/crud-employe/crud-employe.component'
import { UploadImageComponent } from './upload-image/upload-image.component';
const routes: Routes = [
  {path:'signup',component:UserComponent,
   children:[{path:'',component:SignUpComponent}]},
   

    {path:'signIn', component :UserComponent,
  children:[{path:'',component:SignInComponent}]},

  {path :'NavHeader' , component:NavBarHeaderComponent

  },
  {path:'employéé',component:CRUDEmployeComponent},
{path:'allImage',component:UploadImageComponent},
  
   {path: '', redirectTo: '/signup', pathMatch: 'full'}, 
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
