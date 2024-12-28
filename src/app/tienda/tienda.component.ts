import { Component, ValueProvider } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';
import { CartService } from '../services/cart.service';
import { ArticulosService } from '../services/articulos.service';
import { Subscription } from 'rxjs';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [ProductoComponent, CommonModule],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent {
  imgUno = ['imgs/img1.jpg', 'imgs/img1.jpg','imgs/img1.jpg','imgs/img1.jpg','imgs/img1.jpg','imgs/img1.jpg'];
  description = true ;
  flag  = false;
  selectOption = 'placas';
  activeButton: string = 'high'; // Puedes inicializar con el valor que desees.
  expandedImageSrc: string = '';
  expandedImageAlt: string = '';
  images = [
    { src: 'assets/images/producto.png', alt: 'Producto 1' },
    { src: 'assets/images/producto.png', alt: 'Producto 2' },
    { src: 'assets/images/producto.png', alt: 'Producto 3' },
    { src: 'assets/images/producto.png', alt: 'Producto 4' },
    { src: 'assets/images/producto.png', alt: 'Producto 5' }
  ];
  items = ['Placas', 'Revestiminetos', 'Pinturas', 'Herramientas', 'Adesivos', 'Masils']; 
  selectedItem: string | null = null;

  listaProductos: Producto[] = []

  descripcionActiva: any
  carrito: any = []
  private subscription!: Subscription

  constructor(
    private router: Router,
    private cartService: CartService,
    private articulosService: ArticulosService
  ){
    this.expandedImageSrc = this.images[0].src;
    this.subscription = this.articulosService.getAllArticulos().subscribe(
      (productos: Array<any>) => {
        this.listaProductos = productos
      },
      (error) => {

      }
    )
  }

  ngOnInit(){
    
  }

  setActiveButton(button: string): void {
    this.activeButton = button;
  }

  goToDescripcion(id: any): void{
    this.router.navigate(['/descripcion/'+id])
  }
  goToProduct(): void{
    this.flag = false;
  }

  goToTienda(){
    if(this.flag === true){
      this.description = true;
      this.router.navigate(['/tienda'])
    }
    else{
      this.description = false;
      this.flag = true;
    }  
  }

  expandImage(img: { src: string, alt: string }) {
    this.expandedImageSrc = img.src;
    this.expandedImageAlt = img.alt;
  }

  goToCategory(str: string){
    this.flag = true;
    this.selectOption = str;
  }

  selectItem(index: string): void {
    this.selectedItem = index;
  }
  
  addToCart(descripcionActiva: any){

    this.cartService.addItem(descripcionActiva)
  }

}
