import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService {

items: CartItem[] = []

constructor(){}

clear(): void {
    this.items = []
    console.log(this.items)
}
     
    
add(item: MenuItem): void {
    let found = this.items.find(i => item.id == i.item.id)
    
    if(found){
        this.increaseQty(found)
    } else{
        this.items.push(new CartItem(item))
    }
    console.log(this.items)
}
    
remove(item: CartItem): void {
    this.items.splice(this.items.indexOf(item), 1)
}
    
total(): number {
    return this.items.map(i => i.value()).reduce( (prev, next) => prev + next, 0)
}

decreaseQty(item: CartItem): void {
    item.quantity--
    if(item.quantity === 0){
        this.remove(item)
    }
}

increaseQty(item: CartItem): void {
    item.quantity++
}

}