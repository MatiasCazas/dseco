import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  @Input() precio: any
  @Input() descripcion: any
 
  constructor(){}

  ngOnInit(){
    console.log(this.precio)
    console.log(this.descripcion)
  }
  
}