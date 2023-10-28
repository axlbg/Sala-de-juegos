import { Component } from '@angular/core';
import { AutentificadorService } from 'src/app/services/autentificador.service';
import { EstadisticasService } from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-tabla-mayormenor',
  templateUrl: './tabla-mayormenor.component.html',
  styleUrls: ['./tabla-mayormenor.component.css', '../tablas.css'],
})
export class TablaMayormenorComponent {
  games: any = [];

  constructor(
    private autentificador: AutentificadorService,
    private estadisticas: EstadisticasService
  ) {
    this.estadisticas
      .traerMayormenor(this.autentificador.userName)
      .subscribe((games) => {
        if (games !== null) {
          this.games = games;
        }
      });
  }
}
