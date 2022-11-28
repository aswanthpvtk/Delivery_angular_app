import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
uname=""
psw=""



readValues=()=>
{
  let data:any={
                 "uname":this.uname,
                 "psw":this.psw
  }
  console.log(data)

  if ( this.uname=="admin" && this.psw=="12345")

   {

    alert("Valid login")

  }

  else {

    alert("invalid creditioanals")

  }
}

}
