import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '../restaurant-detail/menu/shopping-cart/cart-item.model';
import { RadioOption } from '../shared/radio-container/radio-option.model'
import { OrderService } from './order.service';

import { Order, OrderItem } from './order.model'
import { Router } from '@angular/router';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  delivery: number = 8

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'Money'},
    {label: 'Cartão de Débito', value: 'Débito'},
    {label: 'Vale Refeição', value: 'VR'}
  ]

  constructor(private service: OrderService, private router: Router) { }

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

  total(): number {
    return this.service.total()
  }

  checkOrder(order: Order): void {
    order.orderItems = this.cartItems().map(i => new OrderItem(i.quantity, i.item.id))
    this.service.checkOrder(order).subscribe((orderId: string) => {
      this.router.navigate(['/order-summary'])
      console.log(orderId)
    })
  }

}
