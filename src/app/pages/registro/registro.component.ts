import { Component } from '@angular/core';
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

  constructor(private autentificador: AutentificadorService) {}

  async Registro(event: Event) {
    event.preventDefault();

    await this.autentificador.registrarUsuario(this.emailValue, this.passValue);
  }
}
