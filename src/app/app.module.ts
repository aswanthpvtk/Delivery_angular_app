import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { VegComponent } from './veg/veg.component';
import { NonVegComponent } from './non-veg/non-veg.component';
import { SnacksComponent } from './snacks/snacks.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const myRoute:Routes=[
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"add",
    component:UserRegComponent
  },
  {
    path:"veg",
    component:VegComponent
  },
  {
    path:"non",
    component:NonVegComponent
  },
  {
    path:"snacks",
    component:SnacksComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegComponent,
    VegComponent,
    NonVegComponent,
    SnacksComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
