import { Component } from '@angular/core';

/**
 * Componente que gestiona la página de consejos sobre mate.
 * Muestra una lista de consejos relacionados con los diferentes tipos de mate.
 */
@Component({
  selector: 'app-consejos',
  standalone: false,
  templateUrl: './consejos.component.html',
  styleUrls: ['./consejos.component.scss']
})
export class ConsejosComponent {
  /** Lista de consejos relacionados con la mate */
  consejos = [
    {
      titulo: 'El primer mate: ¿dulce o amargo?',
      descripcion: 'El mate amargo es el preferido por los puristas, ya que permite apreciar el verdadero perfil de la yerba, sus notas herbales y su amargor natural. Por el contrario, el mate dulce (con azúcar, edulcorante o miel) suaviza la intensidad de la hoja, ideal para quienes recién se inician o buscan camuflar la acidez y el sabor fuerte.'
    },
    {
      titulo: 'Mates de calabaza vs. acero inoxidable: ¿cómo cambia la experiencia?',
      descripcion: 'El mate de calabaza es el gran clásico: absorbe el sabor de la yerba con el tiempo, dándole una personalidad única a cada cebada, aunque requiere un curado inicial y secado minucioso. El mate de acero inoxidable es práctico, higiénico, no altera el sabor original de la yerba y mantiene la temperatura del agua por más tiempo.'
    },
    {
      titulo: 'Agua a 75°C vs. 85°C: el impacto de la temperatura',
      descripcion: 'Cebar con agua a 75°C extrae los componentes de la yerba de forma gradual, logrando mates suaves, parejos y duraderos. Si el agua se acerca a los 85°C (o más), la yerba se quema rápido, liberando un amargor excesivo en las primeras cebadas y haciendo que el termo "se lave" en pocos minutos.'
    },
    {
      titulo: 'Envase de papel vs. paquete laminado: ¿cuál conserva mejor?',
      descripcion: 'El envase de papel tradicional es económico, pero permite que la yerba respire, lo que la hace más sensible a la humedad del ambiente. En cambio, el paquete laminado (con recubrimiento de aluminio o plástico) sella el producto de forma hermética, protegiendo el aroma y extendiendo la frescura por mucho más tiempo.'
    }
  ];
}
