import { Component, Input, OnInit } from '@angular/core';
import { mate } from './mate';
import { mateCarritoService } from '../mate-carrito.service';
import { mateDatoService } from '../mate-dato.service';

/**
 * Componente que muestra una lista de productos de tipo mate.
 * Puede filtrar por ofertas y permite agregar productos al carrito.
 */
@Component({
  selector: 'app-mate-listado',
  standalone: false,
  templateUrl: './mate-listado.component.html',
  styleUrls: ['./mate-listado.component.scss']
})
export class mateListadoComponent implements OnInit {
  /** Lista de productos a mostrar */
  @Input() productos: mate[] = [];

  /** Si es true, se muestran solo los productos en oferta */
  @Input() filtrarOferta: boolean = false;

  /** Si es true, permite mostrar los controles de agregar al carrito */
  @Input() permitirAgregar: boolean = false;

  constructor(
    private carrito: mateCarritoService,
    private dataServicio: mateDatoService
  ) {}

  /**
   * Al inicializar el componente, carga los productos desde el servicio.
   * También escucha productos eliminados para restaurar stock.
   */
  ngOnInit(): void {
    this.dataServicio.traerTodo().subscribe((mates: mate[]) => {
      this.productos = this.filtrarOferta
        ? mates.filter(p => p.oferta)
        : mates;
    });

    this.carrito.productoEliminado$.subscribe(productoEliminado => {
      const original = this.productos.find(p => p.nombre === productoEliminado.nombre);
      if (original) {
        original.stock += productoEliminado.cantidad;
      }
    });
  }

  /**
   * Agrega el producto al carrito y actualiza el stock localmente.
   * * @param producto Producto a agregar
   */
  agregarCarrito(producto: mate): void {
    if (producto.cantidad <= 0) return;

    if (producto.cantidad > producto.stock) {
      producto.cantidad = producto.stock;
    }

    const productoACarrito: mate = { ...producto };
    this.carrito.agregarCarrito(productoACarrito);

    producto.stock -= producto.cantidad;
    producto.cantidad = 0;
  }
}