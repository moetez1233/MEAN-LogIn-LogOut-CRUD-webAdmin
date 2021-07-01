import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../shared/user.service'
import {Employee} from '../../shared/emplyee.model'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers:[UserService]
})
export class SignUpComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  employees:Employee[]=[]

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getEmploye()
  }
  getEmploye(){
    this.userService.getemploye().subscribe((res)=>{
      this.employees= res as Employee[]
      console.log(this.employees);
      
    })

  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    form.value.isAdmin=(document.getElementById('flexSwitchCheckDefault') as HTMLInputElement).checked
    console.log(form.value);
    
    
    this.userService.postUser(form.value).subscribe(
      res => {
        console.log(res);
        
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
        (document.getElementById('flexSwitchCheckDefault') as HTMLInputElement).checked=false;
      },
      err => {
        
        
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      fullName: '',
      email: '',
      password: '',
    
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
