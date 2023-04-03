import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  userNotExists: boolean = false;
  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  loginTitle = "login"

  username = new FormControl('',
    [Validators.email, Validators.minLength(2), Validators.required]
  );
  password = new FormControl('',
    [Validators.required, Validators.minLength(2)]
  );

  loginForm = new FormGroup({
    username: this.username,
    password: this.password
  });

  onSubmit(): void {
    if (this.loginForm.valid) {
      let userExists = this.userService.login(this.username.value!, this.password.value!);
      if (userExists) {
        this.router.navigate(['access-granted'])
      } else {
        this.userNotExists = true;
      }
    }

  }

  getUsernameErrorMessage(): string {
    return 'Invalid email'
  }


}
