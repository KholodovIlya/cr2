import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  name: string = ""
  mail: string = ""

  register(): void {
    // let user = {
    //   username: "nik133",
    //   firstname: "Nikita",
    //   surname: "Mironov"
    // }
    // let user_str = JSON.stringify(user);

    // localStorage.setItem("user", user_str);

    console.log(this.name);
  }
}
