import { Component, ValueProvider } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';

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

  constructor(private router: Router){
    this.expandedImageSrc = this.images[0].src;
  }
  goToDescripcion(): void{
    this.description = false;
    this.flag = true;
    this.router.navigate(['/descripcion'])
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

  expandedImageSrc: string = '';
  expandedImageAlt: string = '';
  images = [
    { src: 'assets/images/producto.png', alt: 'Producto 1' },
    { src: 'assets/images/producto.png', alt: 'Producto 2' },
    { src: 'assets/images/producto.png', alt: 'Producto 3' },
    { src: 'assets/images/producto.png', alt: 'Producto 4' },
    { src: 'assets/images/producto.png', alt: 'Producto 5' }
  ];
  expandImage(img: { src: string, alt: string }) {
    this.expandedImageSrc = img.src;
    this.expandedImageAlt = img.alt;
  }

  goToCategory(str: string){
    this.flag = true;
    this.selectOption = str;
  }


  items = ['Placas', 'Revestiminetos', 'Pinturas', 'Herramientas', 'Adesivos', 'Masils']; 
  selectedItem: string | null = null;

  selectItem(index: string): void {
    this.selectedItem = index;
  }
  


}
