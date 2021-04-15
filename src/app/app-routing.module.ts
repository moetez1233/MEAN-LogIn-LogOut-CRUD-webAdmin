import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignUpComponent} from '../app/user/sign-up/sign-up.component'
import {UserComponent} from './user/user.component'

const routes: Routes = [
  {path:'signup',component:UserComponent,
children:[{path:'',component:SignUpComponent}]
},{
  path: '', redirectTo: '/signup', pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
