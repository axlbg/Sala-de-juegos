import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutentificadorService } from 'src/app/services/autentificador.service';
import { NotificacionService } from 'src/app/services/notificacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private ruteador: Router,
    private autentificador: AutentificadorService,
    private notificar: NotificacionService
  ) {}

  emailvalue = '';
  passvalue = '';

  AccesoRapido() {
    this.emailvalue = 'default@example.com';
    this.passvalue = '123123';
  }

  async login(event: Event) {
    event.preventDefault();

    if (this.autentificador.estaLogeado) {
      console.log('ya esta logaedo');
    } else {
      if (this.emailvalue === '' || this.passvalue === '') {
        this.notificar.error('Debes completar todos los campos');
      } else {
        const inicio = await this.autentificador.logear(
          this.emailvalue,
          this.passvalue
        );
        if (inicio) {
          this.ruteador.navigate(['/']);
          this.notificar.exito('Logeado correctamente');
        } else {
          this.notificar.error('Error al logear. Intenta de nuevo');
        }
      }
    }
  }
}
