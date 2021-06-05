import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {BlogComponent} from './blog/blog.component';



const routes: Routes = [

{
  path: 'navbar',
  component : NavbarComponent
},

{
  path: 'home',
  component: HomeComponent
},
{
path: 'dashboard',
component: DashboardComponent
},

{
path: 'register',
component: RegisterComponent
},
{
path: 'login',
component:  LoginComponent
},
{
path: 'profile',
component: ProfileComponent
},
{
  path: 'blog',
  component:BlogComponent 
},

{
  path: '**',
  component: HomeComponent
  
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
