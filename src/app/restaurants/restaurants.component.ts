import { Component, OnInit } from '@angular/core';

import { RestaurantsService } from './restaurants.service'
import { Restaurant } from './restaurant/restaurant.model'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private service: RestaurantsService) { }

  ngOnInit() {
    this.findAll()
  }

  findAll(): void {
    this.service.findAll().subscribe(r => this.restaurants = r)
  } 

}
