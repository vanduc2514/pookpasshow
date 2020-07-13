import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

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
    if (this.log_email === 'admin' && this.log_password === 'admin'){
      this.snackBar.open('Login Successful', '', {duration: 1000});
    }else{
      this.snackBar.open('Login error', '', {duration: 1000});
    }
  }
  // tslint:disable-next-line:typedef
  register() {}

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

}
