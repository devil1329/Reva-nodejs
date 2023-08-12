import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';

const routes: Routes = [
  { path : "", component : LoginRegistrationComponent},
  { path : "Home", component : HomePageComponent},
  { path : "About", component : AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
