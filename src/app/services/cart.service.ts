import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface CartItem {
    p: any,
    quantity: number
}

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cartItems: Array<CartItem> = []
    private cartItemsSubject = new BehaviorSubject<CartItem[]>([])

    cartItems$ = this.cartItemsSubject.asObservable()

    addItem(item: any): void{
        const existingItem = this.cartItems.find((cartItem: any) =>  cartItem.p.IdArticulo == item.IdArticulo) 

        if(existingItem){ 
            existingItem.quantity++
        }else{ 
            this.cartItems.push({p:item, quantity: 1})
        }
        console.log(this.cartItems)
        this.cartItemsSubject.next([...this.cartItems])
    }

    removeItem(itemId: number): void{
        this.cartItems = this.cartItems.filter((item) => item.p.IdArticulo !== itemId)
        this.cartItemsSubject.next([...this.cartItems])
    }
    
    clearCart(): void{
        this.cartItems = []
        this.cartItemsSubject.next([...this.cartItems])
    }

    getAllItems(){
        console.log(this.cartItems)
        return this.cartItems
    }

    getTotalPrice(): number{
        return this.cartItems.reduce((total, item) => total + item.p.PrecioVtaSinIva * item.quantity, 0)
    }

}