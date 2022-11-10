import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: number = 10;
  surname: string = '';
  private val: string = 'Enter your Name';

  isLogged: boolean = false;
  accountUsername: string = '';

  constructor() {
    this.checkUser();
  }

  checkUser(): void {
    let user_str = localStorage.getItem('user');
    if (user_str === null) {
      return;
    } else {
      let user = JSON.parse(user_str);
      this.accountUsername = user.username;
      this.isLogged = true;
    }
  }

  logout(): void {
    localStorage.clear()
    this.accountUsername = '';
    this.isLogged = false;
  }
}
