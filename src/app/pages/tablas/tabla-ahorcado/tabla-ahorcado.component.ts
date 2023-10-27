import { Component } from '@angular/core';
import { AutentificadorService } from 'src/app/services/autentificador.service';
import { EstadisticasService } from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-tabla-ahorcado',
  templateUrl: './tabla-ahorcado.component.html',
  styleUrls: ['./tabla-ahorcado.component.css'],
})
export class TablaAhorcadoComponent {
  games: any = [];

  constructor(
    private autentificador: AutentificadorService,
    private estadisticas: EstadisticasService
  ) {
    this.estadisticas
      .traerAhorcado(this.autentificador.userName)
      .subscribe((games) => {
        if (games !== null) {
          this.games = games;
        }
      });
  }
}
