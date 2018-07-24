import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model'
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private service: ShoppingCartService) { }

  ngOnInit() {
  }

  clear(): void {
    this.service.clear()
  }

  add(item: MenuItem): void {
    this.service.add(item)
  }

  remove(item: CartItem): void {
    this.service.remove(item)
  }

  total(): number {
    return this.service.total()
  }

  getItems(): CartItem[] {
    return this.service.items
  }


}
