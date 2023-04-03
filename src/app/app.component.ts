import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
 
  title = 'Forms-Viola';
  createdUsers?: User[] = [];

  onUserCreated(user: any) {
    this.createdUsers?.push(user);
  }
}
