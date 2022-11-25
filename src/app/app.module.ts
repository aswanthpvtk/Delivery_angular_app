import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { VegComponent } from './veg/veg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegComponent,
    VegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
