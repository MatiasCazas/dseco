import { Component, Input, ElementRef, ViewChild, AfterViewInit, Renderer2} from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements AfterViewInit {
  

  @ViewChild('contenedorCard',  {static: false}) contenedor!: ElementRef;
  @ViewChild('texto', {static: false}) texto!: ElementRef;

  ngAfterViewInit(){
    if (this.contenedor && this.texto) {
      this.textoSuperaAltura();
    }
  }

  @Input() producto: any;
  @Input() precio: any
  @Input() descripcion: any
 
  constructor(
    private renderer : Renderer2,
    private cartService: CartService
  ){}

  ngOnInit(){
    
  }

  textoSuperaAltura() {
    if (!this.texto || !this.contenedor) return;

    const alturaTexto = this.texto.nativeElement.offsetHeight;
    const alturaContenedor = this.contenedor.nativeElement.offsetHeight;

    if (alturaTexto > alturaContenedor) {
      this.renderer.addClass(this.texto.nativeElement, 'card-title');
    }
  }

  addItemToCart(){  
    this.cartService.addItem(this.producto)
  }
  
}