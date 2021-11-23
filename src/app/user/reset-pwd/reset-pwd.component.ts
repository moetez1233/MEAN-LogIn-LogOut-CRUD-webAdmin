import { Component, OnInit } from '@angular/core';
import { SignInService } from '../../shared/sign-in.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.css']
})
export class ResetPwdComponent implements OnInit {

  constructor(private SignInService:SignInService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.SignInService.Reset(form.value).subscribe(
      res =>{
        console.log("email send success");
        

      }
    )
  }
}
