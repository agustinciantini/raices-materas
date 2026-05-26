import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { mate } from './mate-listado/mate';

// URL base del endpoint de productos
const URL = 'https://6a1613601b90031f81b0aaf0.mockapi.io/mates';

/**
 * Servicio encargado de obtener y almacenar los datos de mates desde una API externa.
 * Implementa una pequeña caché en memoria para evitar llamadas redundantes.
 */
@Injectable({
  providedIn: 'root'
})
export class mateDatoService {
  /** Almacena en memoria los productos traídos desde la API */
  productosEnMemoria: mate[] = [];

  constructor(private http: HttpClient) {}

  /**
   * Trae todos los productos desde la API.
   * Inicializa la propiedad `cantidad` en 0 para cada producto.
   * Además, guarda los productos en memoria.
   * 
   * @returns Un observable con la lista de productos (`mate[]`)
   */
  public traerTodo(): Observable<mate[]> {
    return this.http.get<mate[]>(URL).pipe(
      tap((productos: mate[]) => {
        productos.forEach(producto => producto.cantidad = 0);
        this.productosEnMemoria = productos;
      })
    );
  }

  /**
   * Trae un producto por su ID desde la API.
   * También inicializa su cantidad en 0.
   * 
   * @param id El ID del producto a buscar
   * @returns Un observable con el producto correspondiente
   */
  public traerPorId(id: string): Observable<mate> {
    return this.http.get<mate>(`${URL}/${id}`).pipe(
      tap((producto: mate) => {
        producto.cantidad = 0;
      })
    );
  }

  /**
   * Devuelve un producto desde la memoria local (sin hacer una llamada HTTP).
   * Hace una copia para evitar modificar el original.
   * 
   * @param id El ID del producto a buscar
   * @returns Un observable con el producto encontrado o `undefined` si no existe
   */
  public traerPorIdSinllamado(id: string): Observable<mate> {
    const producto = this.productosEnMemoria.find(p => p.id === id);
    return of({ ...producto! });
  }
}
