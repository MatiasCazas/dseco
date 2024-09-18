import { Component } from '@angular/core';
import { ArticulosService } from '../services/articulos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private articulosService: ArticulosService
  ) {}

  articulos: any[] = []

  images: string[] = ['assets/images/uno.jpeg','assets/images/dos.jpeg','assets/images/tres.jpeg'];
  currentIndex = 0;
  translateValue = 0; 

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

  prevSlide(): void {
    if (this.currentIndex === 0) {
      this.currentIndex = this.images.length - 1;
    } else {
      this.currentIndex--;
    }
    this.updateSlider();
  }

  nextSlide(): void {
    if (this.currentIndex === this.images.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
    this.updateSlider();
  }

  updateSlider(): void {
    this.translateValue = -100 * this.currentIndex;
    console.log(this.currentIndex)
  }
}
