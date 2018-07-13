import { ShoppingCartService } from '../restaurant-detail/menu/shopping-cart/shopping-cart.service'
import { CartItem } from '../restaurant-detail/menu/shopping-cart/cart-item.model'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Order } from './order.model';
import { Http, Headers, RequestOptions } from '@angular/http'

import { MEAT_API } from '../app.api'

import 'rxjs/add/operator/map'

@Injectable()
export class OrderService {
    constructor(private cartService: ShoppingCartService, private http: Http){}

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

    total(): number {
        return this.cartService.total()
    }

    checkOrder(order: Order): Observable<string> {
        let headers: Headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return this.http.post(`${MEAT_API}/orders`, 
                                JSON.stringify(order), 
                                new RequestOptions({headers: headers}))
        .map(o =>  o.json())
        .map(o => o.id)
    }
}