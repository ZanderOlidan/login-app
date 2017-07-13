import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user: UserCredentials;

  constructor() {
    this.user = new UserCredentials;
   }

  ngOnInit() {
  }

  logIn() {
    console.log("Name: ", this.user.name);
    console.log("Email: ", this.user.email);
    console.log("Pass: ", this.user.password);
  }
}

export class UserCredentials{
  name: string;
  email: string;
  password: any
}