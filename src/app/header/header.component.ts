import { CommonModule } from '@angular/common';
import { Component, Injectable } from '@angular/core';
import { CartService } from '../services/cart.service';
import { BehaviorSubject, Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(
    private cartService: CartService
  ){}

  carrito: Array<any> = []
  private subscription!: Subscription

  ngOnInit(){
    this.subscription = this.cartService.cartItems$.subscribe((items) => {
      this.carrito = items
    })
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }

}
