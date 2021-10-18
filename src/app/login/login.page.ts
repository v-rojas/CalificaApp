import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  crearCuenta(){
    this.router.navigateByUrl('/crear-cuenta');
  }

  loginConEmail(){
    this.router.navigateByUrl('/login-email');
  }
}
