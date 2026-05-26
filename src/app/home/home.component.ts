import { Component } from '@angular/core';
import { mate } from '../mate-listado/mate';
import { mateDatoService } from '../mate-dato.service';

/**
 * Componente que gestiona la página de inicio.
 * Muestra los productos que están en oferta.
 */
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  /** Lista de productos que están actualmente en oferta */
  productosEnOferta: mate[] = [];

  constructor(private mateService: mateDatoService) { }

  /**
   * Al inicializar el componente, se obtienen todos los productos y se filtran
   * aquellos que están en oferta.
   */
  ngOnInit(): void {
    this.mateService.traerTodo().subscribe(productos => {
      // Filtrar los productos que están en oferta
      this.productosEnOferta = productos.filter(producto => producto.oferta);
    });
  }
}
