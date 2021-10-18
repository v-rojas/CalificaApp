import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-item',
  templateUrl: './detalle-item.page.html',
  styleUrls: ['./detalle-item.page.scss'],
})
export class DetalleItemPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  regresar(){
    this.router.navigateByUrl('/home');
  }
}
