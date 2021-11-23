import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInService } from '../../shared/sign-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private SignInService:SignInService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    //console.log(form.value);
    //form.value.isAdmin=(document.getElementById('flexSwitchCheckDefault') as HTMLInputElement).checked
    //console.log(form.value);
    
    
    this.SignInService.AuthUser(form.value).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl('/NavHeader')      
        
        
        //this.showSucessMessage = true;
       // setTimeout(() => this.showSucessMessage = false, 4000);
        //this.resetForm(form);
        //(document.getElementById('flexSwitchCheckDefault') as HTMLInputElement).checked=false;
      },
      err => {
        console.log("erreur is : "+err.error);
        
        
        /*if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
          */
        
      }
    );
  }

}
