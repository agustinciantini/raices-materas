import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { mateListadoComponent } from './mate-listado/mate-listado.component';
import { mateDetalleComponent } from './mate-detalle/mate-detalle.component';
import { matematesComponent } from './mate-mates/mate-mate.component';
import { mateComprarComponent } from './mate-comprar/mate-comprar.component';
import { ConsejosComponent } from './consejos/consejos.component';
import { mateContactosComponent } from './mate-contactos/mate-contactos.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: mateListadoComponent },
  { path: 'producto/:id', component: mateDetalleComponent },
  { path: 'comprar', component: mateComprarComponent },
  { path: 'consejos', component: ConsejosComponent },
  { path: 'contacto', component: mateContactosComponent },
  { path: 'carrito', component: matematesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }