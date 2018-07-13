import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../restaurant-detail/menu/shopping-cart/shopping-cart.service'

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html',
  styleUrls: ['./delivery-costs.component.css']
})
export class DeliveryCostsComponent implements OnInit {

  @Input() itemsValue: number
  @Input() deliveryFare: number

  constructor(private service: ShoppingCartService) { }

  ngOnInit() {
  }

  total(): number {
    return this.itemsValue + this.deliveryFare
  }

}
