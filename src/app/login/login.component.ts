import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  log_email: string;
  // tslint:disable-next-line:variable-name
  log_password: string;
  // tslint:disable-next-line:variable-name
  reg_email: string;
  // tslint:disable-next-line:variable-name
  reg_password: string;
  // tslint:disable-next-line:variable-name
  reg_confirm_password: string;
  // tslint:disable-next-line:typedef
  login() {
  }
  // tslint:disable-next-line:typedef
  register() {}

  constructor() { }

  ngOnInit(): void {
  }

}
