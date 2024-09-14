import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { MissingComponent } from './missing/missing.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "cotizador",
        component: CotizadorComponent
    },
    {
        path: "en-construccion",
        component: MissingComponent
    }
];
