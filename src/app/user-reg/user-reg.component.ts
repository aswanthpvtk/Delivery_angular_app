import { Component } from '@angular/core';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent {

  fname=""
  lname=""
  address=""
  pno=""
  email=""
  uname=""
  psw=""
  cpsw=""


  readValues=()=>
  {
    let data:any={"fname":this.fname,
                  "lname":this.lname,
                  "address":this.address,
                  "pno":this.pno,
                  "email":this.email,
                  "uname":this.uname,
                  "psw":this.psw,
                  "cpsw":this.cpsw

    
    }
    console.log(data)
  }



}
