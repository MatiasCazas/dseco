import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { MissingComponent } from './missing/missing.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { CartComponent } from './cart/cart.component';
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
    },
    {
        path: "tienda",
        component: TiendaComponent
    },
    {
        path: "descripcion/:id",
        component: ProductDescriptionComponent
    },
    {
        path: "cart",
        component: CartComponent
    }
];
