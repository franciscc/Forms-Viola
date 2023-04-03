import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['../login/login.component.css']
})
export class CreateAccountComponent {

  constructor(private router: Router, private userService: UserService){

  }

  createAccountTitle:string = 'Es simple y rapido!'
  minPasswordCharacters:number = 8;
  userAlreadyExists:boolean = false;
  passwordsNotMatch:boolean = false;

  username = new FormControl('', [Validators.email, Validators.required, Validators.minLength(2)]);
  password = new FormControl('', [Validators.required, Validators.minLength(this.minPasswordCharacters)]);
  repeatPassword = new FormControl('', [Validators.required, Validators.minLength(2)]);

  formGroup = new FormGroup(
    {
      username: this.username,
      password: this.password,
      repeatPassword: this.repeatPassword
    }
  );

  getInvalidPasswordLengthErrorMessage(): string {
    return `Min ${this.minPasswordCharacters} required.`;
  }

  getInvalidEmailErrorMessage(): string {
    return `Email is not valid.`;
  }

  getPasswordsNotMatchErrorMessage(): string {
    return 'The passwords does not match.';
  }

  onSubmit() {
    if (this.password.value == this.repeatPassword.value && this.formGroup.valid && !this.userService.userExist(this.username.value!)) {
      
      // create new user in app.module
      let user = new User(
        Math.round(Math.random() * 100000) + 1,
        this.username.value ?? '',
        this.password.value ?? ''
      )

      this.userService.users.push(user);  

      this.router.navigate(['/user-created'])
    }

    if(this.password.value != this.repeatPassword.value) this.passwordsNotMatch = true;
    if(this.userService.userExist(this.username.value!)) this.userAlreadyExists = true;
  }
}
