import { ActivatedRoute, Router } from '@angular/router';
import { ArticulosService } from '../services/articulos.service';
import { CartService } from '../services/cart.service';
import { Component, Input, ElementRef, ViewChild, AfterViewInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-product-description',
  standalone: true,
  imports: [],
  templateUrl: './product-description.component.html',
  styleUrl: './product-description.component.css'
})
export class ProductDescriptionComponent {

  flag: boolean = true
  expandedImageSrc: boolean = true
  images: any = [
    { src: 'assets/images/producto.png', alt: 'Producto 1' },
    { src: 'assets/images/producto.png', alt: 'Producto 2' },
    { src: 'assets/images/producto.png', alt: 'Producto 3' },
    { src: 'assets/images/producto.png', alt: 'Producto 4' },
    { src: 'assets/images/producto.png', alt: 'Producto 5' }
  ];
  descripcionActiva: any
  producto: any = {}

  constructor(
    private cartService: CartService,
    private articulosService: ArticulosService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(){

    this.expandedImageSrc = this.images[0].src;

    let productId = 0
    this.route.params.subscribe((params) => {
      productId = params['id']; // Obtener el parámetro 'id'
      console.log('Product ID:', productId);
    });
    this.producto = this.articulosService.findArticulo(productId)
  }

  goToTienda(){}

  expandImage(l: any){

  }

  addToCart(p: any){
    this.cartService.addItem(this.producto)
  }

  goToProduct(){
    this.router.navigate(['/cart'])
  }

}
