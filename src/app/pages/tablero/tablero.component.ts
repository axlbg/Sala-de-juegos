import { Component } from '@angular/core';
import { MensajeInfoService } from 'src/app/services/mensaje-info.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css'],
})
export class TableroComponent {
  constructor(private _mensajeInfo: MensajeInfoService) {
    _mensajeInfo.changeEmitted$.subscribe((text) => {
      this.mensajeDeInformacion = text;
    });
  }
  mensajeDeInformacion = 'Toca START para comenzar el juego';
}
