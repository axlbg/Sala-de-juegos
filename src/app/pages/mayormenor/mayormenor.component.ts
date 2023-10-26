import { Component } from '@angular/core';
import { MensajeInfoService } from 'src/app/services/mensaje-info.service';

@Component({
  selector: 'app-mayormenor',
  templateUrl: './mayormenor.component.html',
  styleUrls: ['./mayormenor.component.css'],
})
export class MayormenorComponent {
  constructor(private _mensajeInfo: MensajeInfoService) {}
  cartaNueva = '';
  cartaAnterior = '';
  mazoActual = [''];
  puntaje = 0;

  perdiste = false;
  started = false;

  cartaLink = 'assets/img/naipes/comodin.png';
  cartaLinkAnterior = 'assets/img/naipes/dorso.png';
  cartaDorso = 'assets/img/naipes/dorso.png';
  imgStart = 'assets/img/start.png';

  mensajeDeInformacion = 'Toca START para comenzar el juego';

  // @Output() MensajeInfo: EventEmitter<any> = new EventEmitter<any>();
  //this.MensajeInfo.emit(this.mensajeDeInformacion);

  mazoDeCartas = [
    '01b',
    '01c',
    '01e',
    '01o',
    '02b',
    '02c',
    '02e',
    '02o',
    '03b',
    '03c',
    '03e',
    '03o',
    '04b',
    '04c',
    '04e',
    '04o',
    '05b',
    '05c',
    '05e',
    '05o',
    '06b',
    '06c',
    '06e',
    '06o',
    '07b',
    '07c',
    '07e',
    '07o',
    '10b',
    '10c',
    '10e',
    '10o',
    '11b',
    '11c',
    '11e',
    '11o',
    '12b',
    '12c',
    '12e',
    '12o',
  ];

  Empezar() {
    this.mazoActual = this.mazoDeCartas;
    this.cartaNueva = this.nuevaCarta();
    this.cartaLink = './assets/img/naipes/' + this.cartaNueva + '.png';
    this.cartaLinkAnterior = 'assets/img/naipes/dorso.png';

    this.mensajeDeInformacion = '¿Mayor o menor?';
    this.puntaje = 0;
    this._mensajeInfo.emitChange(this.mensajeDeInformacion);
    this.perdiste = false;
    this.started = true;
  }

  ClickMayorMenor(opcion: any) {
    this.cartaAnterior = this.cartaNueva;
    this.mazoActual = this.arrayRemove(this.mazoActual, this.cartaAnterior);
    this.cartaNueva = this.nuevaCarta();

    let numCartaAnterior = parseInt(
      this.cartaAnterior[0] + this.cartaAnterior[1]
    );
    let numCartaNueva = parseInt(this.cartaNueva[0] + this.cartaNueva[1]);

    this.cartaLinkAnterior = this.cartaLink;
    this.cartaLink = './assets/img/naipes/' + this.cartaNueva + '.png';

    let resultado;
    if (numCartaAnterior == numCartaNueva) {
      this.mensajeDeInformacion = 'Las cartas fueron iguales';
      resultado = -1;
    } else if (numCartaAnterior < numCartaNueva) {
      this.mensajeDeInformacion = 'La carta fue mayor';
      resultado = 1;
    } else {
      this.mensajeDeInformacion = 'La carta fue menor';
      resultado = 0;
    }

    if (resultado == -1 || opcion == resultado) {
      this.mensajeDeInformacion += ' - ¿Mayor o menor?';
      this.puntaje++;
    } else {
      this.mensajeDeInformacion += ' - TERMINA EL JUEGO - START para empezar';
      this.perdiste = true;
    }
    this._mensajeInfo.emitChange(this.mensajeDeInformacion);
  }

  nuevaCarta() {
    let random = Math.floor(Math.random() * this.mazoActual.length);
    return this.mazoActual[random];
  }

  arrayRemove(arr: any, value: any) {
    return arr.filter(function (geeks: any) {
      return geeks != value;
    });
  }
}
