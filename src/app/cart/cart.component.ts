import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(
    private cartService: CartService
  ){}

  carrito: Array<any> = []
  valorTotalCarrito: number = 0

  private subscription!: Subscription 

  ngOnInit(){
    this.carrito = this.cartService.getAllItems()

    console.log(this.carrito)

    //valor total de la sumatoria de los productos del carrito
    this.valorTotalCarrito = this.cartService.getTotalPrice()
    this.valorTotalCarrito.toFixed(2)

  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }

}
