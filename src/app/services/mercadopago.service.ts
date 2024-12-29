import { Injectable } from "@angular/core";
import { Producto } from "../models/producto.model";
import { HttpClient } from "@angular/common/http";
import { CartService } from "./cart.service";

@Injectable({
    providedIn: 'root'
})

export class MercadoPagoService {

    constructor(
        private http: HttpClient,
        private cartService: CartService
    ){

    }

    private MERCADOPAGOURL: string = "https://api.mercadopago.com"
    private PUBLICKEY: string = "TEST-8303005779087812-012301-c78b3b9c25e38eb485af1ef22547709c-162362616"

    createCheckout(){

        let carrito: Array<any> = this.cartService.getAllItems()

        let preference_items: Array<any> = []

        carrito.forEach(item => {
            preference_items.push({
                id: item.p.IdArticulo,
                title: item.p.Descripcion,
                quantity: item.quantity,
                unit_price: item.p.PrecioVtaSinIva
            })
        })

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.PUBLICKEY}` 
        }
        const body = {
            items: preference_items
        }
        return this.http.post(`${this.MERCADOPAGOURL}/checkout/preferences`, body, { headers })

    }

}