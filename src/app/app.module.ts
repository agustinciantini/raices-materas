import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { mateListadoComponent } from './mate-listado/mate-listado.component';
import { InputNumeroComponent } from './input-numero/input-numero.component';
import { HomeComponent } from './home/home.component';
import { ConsejosComponent } from './consejos/consejos.component';

// Corrección de nombres exactos y rutas (con s al final):
import { matematesComponent } from './mate-mates/mate-mate.component'; 
import { mateDetalleComponent } from './mate-detalle/mate-detalle.component';
import { mateComprarComponent } from './mate-comprar/mate-comprar.component';
import { mateContactosComponent } from './mate-contactos/mate-contactos.component';
import { mateCarritoComponent } from './mate-carrito/mate-carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    mateListadoComponent,
    matematesComponent,
    InputNumeroComponent,
    HomeComponent,
    ConsejosComponent,
    mateDetalleComponent,
    mateComprarComponent,
    mateContactosComponent,
    mateCarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }