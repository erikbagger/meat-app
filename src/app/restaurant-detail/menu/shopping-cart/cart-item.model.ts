import { MenuItem } from '../menu-item/menu-item.model'
import { timeout } from 'q';

export class CartItem{
    constructor(public item: MenuItem, public quantity: number = 1){}

    value(): number{
        return this.item.price * this.quantity
    }
}