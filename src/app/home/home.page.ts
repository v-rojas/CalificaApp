import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items = [
    {
    img: "assets/img/restaurant.png",
    rate: "2.5K",
    price: "$12",
    title: "Restaurante Petrus, Guayaquil",
    desc: "32000   |   4000"
  },
  {
    img: "assets/img/restaurant.png",
    rate: "2.5K",
    price: "$12",
    title: "Restaurante Petrus, Guayaquil",
    desc: "32000   |   4000"
  },
  {
    img: "assets/img/restaurant.png",
    rate: "2.5K",
    price: "$12",
    title: "Restaurante Petrus, Guayaquil",
    desc: "32000   |   4000"
  }]

  constructor(
    private router: Router
  ) { }

  detalleItem() {
    this.router.navigateByUrl('/detalle-item');
  }
}
