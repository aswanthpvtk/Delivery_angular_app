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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
