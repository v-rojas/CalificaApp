import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.page.html',
  styleUrls: ['./login-email.page.scss'],
})
export class LoginEmailPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  crearCuenta(){
    this.router.navigateByUrl('/crear-cuenta');
  }

  registrar(){
    this.router.navigateByUrl('/home');
  }

}
