import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { NotificacionService } from './notificacion.service';

@Injectable({
  providedIn: 'root',
})
export class AutentificadorService {
  estaLogeado: boolean = false;
  userName: string = 'default';

  constructor(
    public firebaseAuth: AngularFireAuth,
    private ruteador: Router,
    private notificar: NotificacionService
  ) {}

  /* async logear(email: string, password: string) {
    try {
      const inicio = await this.firebase.userLogin(email, password);
      if (inicio) {
        this.estaLogeado = true;
        this.userName = email;
      }
      return inicio;
    } catch (error) {
      return null;
    }
  }*/

  async logear(email: string, password: string) {
    try {
      const inicio = await this.firebaseAuth.signInWithEmailAndPassword(
        email,
        password
      );
      if (inicio) {
        this.estaLogeado = true;
        this.userName = email;
      }
      return inicio;
    } catch (error) {
      console.log('Email y/o contraseña invalidos');
      return null;
    }
  }

  deslogear() {
    this.estaLogeado = false;
    console.log('deslogeado');
    //this.firebase.logout();
    this.firebaseAuth.signOut();
  }

  /* registrarUsuario(email: string, password: string) {
    this.firebase.signup(email, password);
    this.estaLogeado = true;
    this.userName = email;
  }*/

  async registrarUsuario(email: string, password: string) {
    await this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        //localStorage.setItem('user',JSON.stringify(res.user));
        this.estaLogeado = true;
        this.userName = email;
        this.ruteador.navigate(['/']);
        this.notificar.exito('Registrado correctamente.');
      })
      .catch((error) => {
        //this.notifyService.showError(this.createMessage(error.code), 'Error');
        //console.log(this.createMessage(error.code));
        this.notificar.error(this.createMessage(error.code));
        return null;
      });
  }

  private createMessage(errorCode: string): string {
    let message: string = '';
    switch (errorCode) {
      case 'auth/internal-error':
        message = 'Los campos estan vacios';
        break;
      case 'auth/operation-not-allowed':
        message = 'La operación no está permitida.';
        break;
      case 'auth/email-already-in-use':
        message = 'El email ya está registrado.';
        break;
      case 'auth/invalid-email':
        message = 'El email no es valido.';
        break;
      case 'auth/weak-password':
        message = 'La contraseña debe tener al menos 6 caracteres';
        break;
      default:
        message = 'Error al crear el usuario.';
        break;
    }

    return message;
  }
}
