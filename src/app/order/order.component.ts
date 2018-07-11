import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '../restaurant-detail/menu/shopping-cart/cart-item.model';
import  { RadioOption } from '../shared/radio-container/radio-option.model'
import { OrderService } from './order.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() order: CartItem[]

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'Money'},
    {label: 'Cartão de Débito', value: 'Débito'},
    {label: 'Vale Refeição', value: 'VR'}
  ]

  constructor(private service: OrderService) { }

  ngOnInit() {
  }

  cartItems(): CartItem[] {
    return this.service.getItems()
  }

  increaseQty(item: CartItem): void {
    this.service.increaseQty(item)
  }

  decreaseQty(item: CartItem): void {
    this.service.decreaseQty(item)
  }

  removeItem(item: CartItem): void {
    this.service.remove(item)
  }

}
