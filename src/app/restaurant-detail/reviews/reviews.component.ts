import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { RestaurantsService } from '../../restaurants/restaurants.service';

import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any[]>

  constructor(private service: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.parent.snapshot.params['id']
    this.reviews = this.findByRestaurantId(id)
  }

  findByRestaurantId(id: string): Observable<any[]> {
    return this.service.findReviewsByRestaurantId(id)
  }

}
