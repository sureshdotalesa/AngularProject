import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MydetailsComponent } from './mydetails/mydetails.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path:"home" , component:HomeComponent},
  { path:"login" , component:LoginComponent},
  { path: "register" , component:RegisterComponent},
  { path: "aboutus" , component:AboutUsComponent},
  { path: "myDetails" ,component:MydetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
