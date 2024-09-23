import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { ArticulosService } from '../services/articulos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    private articulosService: ArticulosService,
    private ngZone: NgZone
  ) {}

  articulos: any[] = []

  images: string[] = ['assets/images/Banners-Digi-seco_1.png', 'assets/images/Banners-Digi-seco_3.png'];


  async ngOnInit(){
    this.ngZone.runOutsideAngular(() => {
      this.startAutoSlide();
    });
    this.articulosService.getAllArticulos().subscribe(
      data => {
        //this.articulos.push(data.find(data[0].IdArticulo == 58))
      },
      error =>{
        console.error(error)
      }
    )
  }
  currentIndex = 0;
  translateValue = 0; 
  private intervalId: any;





  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.stopAutoSlide();
    this.intervalId = setInterval(() => {
      this.ngZone.run(() => {
        this.nextSlide();
      });
    }, 3000);
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
    this.updateSlider();
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
    this.updateSlider();
  }

  updateSlider(): void {
    this.translateValue = -100 * this.currentIndex;
  }


}
