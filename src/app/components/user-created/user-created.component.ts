import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-created',
  templateUrl: './user-created.component.html',
  styleUrls: ['./user-created.component.css']
})
export class UserCreatedComponent implements OnInit, OnDestroy{
  constructor(private router: Router){
  }

  timeout: any;

  ngOnInit(): void {
    this.timeout = setTimeout(() => {
      this.router.navigate(['login'])
    }, 3000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeout);
  }

}
