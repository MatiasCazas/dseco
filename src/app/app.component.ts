import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, FooterComponent, TiendaComponent, ProductoComponent, ProductDescriptionComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dseco';
}
