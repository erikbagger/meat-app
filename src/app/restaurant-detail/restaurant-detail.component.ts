import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Restaurant } from '../restaurants/restaurant/restaurant.model'
import { RestaurantsService } from '../restaurants/restaurants.service'

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(private service: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id: string): void {
    this.service.findById(id).subscribe(r => this.restaurant = r)
  }
}
