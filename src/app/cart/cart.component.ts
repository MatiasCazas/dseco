import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MercadoPagoService } from '../services/mercadopago.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(
    private cartService: CartService,
    private router: Router,
    private mercadoPago: MercadoPagoService
  ){}

  carrito: Array<any> = []
  valorTotalCarrito: number = 0

  private subscription!: Subscription 

  ngOnInit(){
    this.carrito = this.cartService.getAllItems()

    console.log(this.carrito)

    //valor total de la sumatoria de los productos del carrito
    
    this.updateTotal()
  }

  updateTotal(){
    this.valorTotalCarrito = this.cartService.getTotalPrice()
    this.valorTotalCarrito.toFixed(2)
  }

  deleteProductFromCart(id: any){
    this.cartService.removeItem(id)

    this.carrito = this.cartService.getAllItems()

    this.updateTotal()
  }

  substractProduct(id: any){
    this.cartService.substractProduct(id)

    this.carrito = this.cartService.getAllItems()

    this.updateTotal()
  }

  addProductoToCart(p: any){
    this.cartService.addItem(p)
    this.carrito = this.cartService.getAllItems()
    this.updateTotal()
  }

  goTienda(){
    this.router.navigate(['/tienda'])
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }

  createCheckout(){
    this.mercadoPago.createCheckout().subscribe({
        next: (response: any) =>{ 
          window.open(response.sandbox_init_point, '_blank')
          console.log(response)
        },
        error: (error: any) => console.error(error)
    })
    
  }

}
