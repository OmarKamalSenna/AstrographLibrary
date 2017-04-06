import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;
  usertype: Boolean;
  companyid: Number;
  city: String;
  
  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
      usertype: this.usertype,
      city: this.city,
      companyid: this.companyid
    }
    if (!this.validateService.validateRegister(user)) {
      this.flashMessage.show('Please fill in all the fields', { cssClass: 'alert-danger', timeout: '3000' });

      return false;
    }

    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show('Please enter a valid e-mail address', { cssClass: 'alert-danger', timeout: '3000' });
      return false;
    }



    //Register User
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('You are now registered and can login', { cssClass: 'alert-success', timeout: '3000' });
        this.router.navigate(['/login']);
      } else {
        console.log(data);
        this.flashMessage.show('Something went wrong!', { cssClass: 'alert-success', timeout: '3000' });
        this.router.navigate(['/login']);

      }
    });

  }

}
