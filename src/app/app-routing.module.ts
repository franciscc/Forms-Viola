import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { UserCreatedComponent } from './components/user-created/user-created.component';
import { AccessGrantedComponent } from './components/access-granted/access-granted.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'login/create-account', component: CreateAccountComponent},
  {path: 'user-created', component: UserCreatedComponent},
  {path: 'access-granted', component: AccessGrantedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
