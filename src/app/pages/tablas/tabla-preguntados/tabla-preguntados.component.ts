import { Component } from '@angular/core';
import { AutentificadorService } from 'src/app/services/autentificador.service';
import { EstadisticasService } from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-tabla-preguntados',
  templateUrl: './tabla-preguntados.component.html',
  styleUrls: ['./tabla-preguntados.component.css', '../tablas.css'],
})
export class TablaPreguntadosComponent {
  games: any = [];

  constructor(
    private autentificador: AutentificadorService,
    private estadisticas: EstadisticasService
  ) {
    this.estadisticas
      .traerPreguntados(this.autentificador.userName)
      .subscribe((games) => {
        if (games !== null) {
          this.games = games;
        }
      });
  }
}
