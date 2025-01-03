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

    addItem(item: any, quantity: number = 1): void{
        const existingItem = this.cartItems.find((cartItem: any) =>  cartItem.p.IdArticulo == item.IdArticulo) 

        if(existingItem){ 
            if(quantity) existingItem.quantity + quantity
            else existingItem.quantity++
        }else{ 
            this.cartItems.push({p:item, quantity: quantity})
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

    substractProduct(id:any){
        const existingItem = this.cartItems.find((cartItem: any) => cartItem.p.IdArticulo == id);

        if (existingItem) {
            existingItem.quantity--;

            if (existingItem.quantity <= 0) {
                this.removeItem(id); // Si la cantidad es 0 o menor, elimina el producto
            } else {
                this.cartItemsSubject.next([...this.cartItems]);
            }
        }
    }

}