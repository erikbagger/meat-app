import { ShoppingCartService } from '../restaurant-detail/menu/shopping-cart/shopping-cart.service'
import { CartItem } from '../restaurant-detail/menu/shopping-cart/cart-item.model'
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {
    constructor(private cartService: ShoppingCartService){}

    getItems(): CartItem[] {
        return this.cartService.items
    }

    decreaseQty(item: CartItem): void {
        this.cartService.decreaseQty(item)
    }

    increaseQty(item: CartItem):void {
        this.cartService.increaseQty(item)
    }

    remove(item: CartItem): void {
        this.cartService.remove(item)
    }
}