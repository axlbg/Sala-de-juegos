import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as moment from 'moment';
import { AutentificadorService } from './autentificador.service';

@Injectable({
  providedIn: 'root',
})
export class EstadisticasService {
  constructor(private firestore: AngularFirestore) {}

  private obtenerHora() {
    return moment(new Date()).format('DD-MM-YYYY HH:mm:ss');
  }

  guardarAhorcado(
    usuario: any,
    ganador: boolean,
    palabra: string,
    errores: number
  ) {
    let hora = this.obtenerHora();
    let juego = 'ahorcado';
    let obj = {
      usuario: usuario,
      juego: juego,
      hora: hora,
      ganador: ganador,
      palabra: palabra,
      errores: errores,
    };
    this.firestore.collection('resultados').add(obj);
  }

  guardarMayormenor(usuario: any, puntaje: number) {
    let hora = this.obtenerHora();
    let juego = 'mayormenor';
    let obj = {
      usuario: usuario,
      juego: juego,
      hora: hora,
      puntaje: puntaje,
    };
    this.firestore.collection('resultados').add(obj);
  }

  traerAhorcado(usuario: any) {
    const collection = this.firestore.collection('resultados', (ref) =>
      ref.where('usuario', '==', usuario).where('juego', '==', 'ahorcado')
    );
    return collection.valueChanges();
  }

  traerMayormenor(usuario: any) {
    const collection = this.firestore.collection('resultados', (ref) =>
      ref.where('usuario', '==', usuario).where('juego', '==', 'mayormenor')
    );
    return collection.valueChanges();
  }
}
