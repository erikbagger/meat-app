import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantsService } from '../../restaurants/restaurants.service';

import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<any[]>

  constructor(private service: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.parent.snapshot.params['id']
    this.menu = this.findByRestaurantId(id)
  }

  findByRestaurantId(id: string): Observable<any[]> {
    return this.service.findMenuByRestaurantId(id)
  }

}
