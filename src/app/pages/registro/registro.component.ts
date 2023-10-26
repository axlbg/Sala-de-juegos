import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'jquery';
import { AutentificadorService } from 'src/app/services/autentificador.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  emailValue = '';
  passValue = '';
  confirmPassword = '';

  constructor(
    private autentificador: AutentificadorService,
    private ruteador: Router
  ) {}

  async Registro(event: Event) {
    event.preventDefault();

    /*if (
      this.emailValue === '' ||
      this.passValue === '' ||
      this.confirmPassword === ''
    ) {
      this.notificacionError('Debe completar todos los campos');
    } else if (this.passValue !== this.confirmPassword) {
      this.notificacionError('Las contraseñas no coinciden');
    } else {*/
    await this.autentificador.registrarUsuario(this.emailValue, this.passValue);
  }
}
