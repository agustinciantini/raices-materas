import { Component, Inject } from '@angular/core';
import { mateCarritoService } from './mate-carrito.service';

/**
 * Componente raíz de la aplicación Raíces Materas.
 * Gestiona el título, el estado del carrito desplegable y la cantidad de productos en él.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  /** Título de la aplicación (no se usa directamente, pero queda disponible) */
  title: string = 'mate-mate';

  /** Define si el carrito se muestra desplegado */
  mostrarCarrito: boolean = false;

  /** Cantidad total de productos en el carrito (actualizado vía observable) */
  cantidadEnCarrito: number = 0;

  /**
   * Inyecta el servicio del carrito y se suscribe a los cambios en la cantidad total de productos.
   * 
   * @param carrito Servicio que gestiona el carrito de compras
   */
  constructor(public carrito: mateCarritoService) {
    this.carrito.cantidadTotal$.subscribe(cant => {
      this.cantidadEnCarrito = cant;
    });
  }

  /**
   * Alterna el estado visible del carrito (muestra/oculta).
   */
  toggleCarrito(): void {
    this.mostrarCarrito = !this.mostrarCarrito;
  }
}
