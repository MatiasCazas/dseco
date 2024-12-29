import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ArticulosService } from './services/articulos.service';
import { CartService } from './services/cart.service';
import { MercadoPagoService } from './services/mercadopago.service';

@NgModule({
  declarations: [
    AppComponent // Declare your main component
  ],
  imports: [
    AppComponent,
    BrowserModule,
    HttpClientModule, // Import HttpClientModule here
    FormsModule
  ],
  providers: [ArticulosService, CartService, MercadoPagoService], // Provide your service
  bootstrap: [AppComponent] // Bootstrap your main component
})

export class AppModule { }