import { Component } from '@angular/core';
import { ArticulosService } from '../services/articulos.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private articulosService: ArticulosService
  ) {}

  articulos: any[] = []

  async ngOnInit(){
    this.articulosService.getAllArticulos().subscribe(
      data => {
        //this.articulos.push(data.find(data[0].IdArticulo == 58))
      },
      error =>{
        console.error(error)
      }
    )
  }
}
