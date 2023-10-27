import { Component } from '@angular/core';
import { AutentificadorService } from 'src/app/services/autentificador.service';
import { EstadisticasService } from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css'],
})
export class EstadisticasComponent {
  ahorcado = { cantidadDeJuegos: 0 };
  mayorMenor = { cantidadDeJuegos: 0, mayorPuntaje: 0 };
  preguntados = { cantidadDeJuegos: 0, mayorPuntaje: 0 };

  constructor(
    private auth: AutentificadorService,
    private estadisticas: EstadisticasService
  ) {
    this.estadisticas.traerAhorcado(this.auth.userName).subscribe((games) => {
      this.ahorcado.cantidadDeJuegos = games.length;
    });

    this.estadisticas.traerMayormenor(this.auth.userName).subscribe((games) => {
      if (games !== null) {
        this.mayorMenor.cantidadDeJuegos = games.length;

        games.forEach((element: any) => {
          if (element.puntaje > this.mayorMenor.mayorPuntaje) {
            this.mayorMenor.mayorPuntaje = element.puntaje;
          }
        });
      }
    });
  }
}
