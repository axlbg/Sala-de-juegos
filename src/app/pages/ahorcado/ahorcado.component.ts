import { Component } from '@angular/core';
import { MensajeInfoService } from 'src/app/services/mensaje-info.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css'],
})
export class AhorcadoComponent {
  palabra_secreta: string = '';
  palabra_activa: string = '';

  letras_usadas: Array<string>;
  constructor(private _mensajeInfo: MensajeInfoService) {
    this.letras_usadas = new Array();
  }

  intentos = 0;
  started = false;

  imagenesAhorcado = [
    'assets/img/ahorcado/1.png',
    'assets/img/ahorcado/2.png',
    'assets/img/ahorcado/3.png',
    'assets/img/ahorcado/4.png',
    'assets/img/ahorcado/5.png',
    'assets/img/ahorcado/6.png',
    'assets/img/ahorcado/7.png',
    'assets/img/ahorcado/8.png',
  ];
  imgAhorcado = this.imagenesAhorcado[0];
  imgStart = 'assets/img/start.png';
  imgWin = 'assets/img/ahorcado/win.png';

  activarTecla(letra: string) {
    let mensajeDeInformacion;
    let element: any = document.getElementById(letra);
    if (element.classList.contains('disable')) {
      return;
    }

    element.classList.add('disable');

    this.letras_usadas.push(letra);

    if (this.palabra_secreta.includes(letra)) {
      this.palabra_activa = '';
      let encontroLetra = false;
      for (let i = 0; i < this.palabra_secreta.length; i++) {
        this.letras_usadas.forEach((usada) => {
          if (usada == this.palabra_secreta.charAt(i)) {
            this.palabra_activa += usada += ' ';
            encontroLetra = true;
          }
        });

        if (!encontroLetra) {
          this.palabra_activa += '_ ';
        }
        encontroLetra = false;
      }
      let str = this.palabra_activa.replace(/\s+/g, '');
      if (str == this.palabra_secreta) {
        mensajeDeInformacion =
          '¡GANASTE! La palabra era ' + this.palabra_secreta.toUpperCase();
        this.started = false;
        this.imgAhorcado = this.imgWin;
      } else {
        mensajeDeInformacion =
          'La ' + letra.toUpperCase() + ' estaba. Seguí así.';
      }
      this.palabra_activa = this.palabra_activa.toUpperCase();
    } else {
      this.intentos++;
      this.imgAhorcado = this.imagenesAhorcado[this.intentos];

      if (this.intentos >= this.imagenesAhorcado.length - 1) {
        mensajeDeInformacion = '¡Perdiste! No hay nadie peor que vos.';
        this.started = false;
      } else {
        mensajeDeInformacion =
          'La ' +
          letra.toUpperCase() +
          ' no es parte de la palabra. Elegí otra.';
      }
    }
    this._mensajeInfo.emitChange(mensajeDeInformacion);
  }

  Empezar() {
    this.intentos = 0;
    this.imgAhorcado = this.imagenesAhorcado[this.intentos];
    let palabras = [
      'leopardo',
      'paraguas',
      'cachalote',
      'estampado',
      'rinoceronte',
      'cuadrado',
      'helicoptero',
      'pasta',
      'fideo',
      'calamar',
      'zapato',
      'calambre',
      'gorila',
    ];

    let pAleatoria = Math.floor(Math.random() * palabras.length);
    this.palabra_secreta = palabras[pAleatoria];

    this.palabra_activa = '';
    for (let i = 0; i < this.palabra_secreta.length; i++) {
      this.palabra_activa += '_ ';
    }

    /*  let element: any;
    this.letras_usadas.forEach((letra) => {
      element = document.getElementById(letra);
      //element.classList.remove('disable');
    });*/

    this.letras_usadas = new Array();
    this.started = true;
    this._mensajeInfo.emitChange(
      'Adivina la palabra usando el teclado en pantalla'
    );
  }
}
