import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArticulosService } from './services/articulos.service';

@NgModule({
  declarations: [
    AppComponent // Declare your main component
  ],
  imports: [
    AppComponent,
    BrowserModule,
    HttpClientModule // Import HttpClientModule here
  ],
  providers: [ArticulosService], // Provide your service
  bootstrap: [AppComponent] // Bootstrap your main component
})

export class AppModule { }