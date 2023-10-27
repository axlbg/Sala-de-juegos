import { Component } from '@angular/core';
import { AutentificadorService } from 'src/app/services/autentificador.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private autentificador: AutentificadorService) {
    this.estaLogeado = this.autentificador.estaLogeado;
  }
  estaLogeado = this.autentificador.estaLogeado;
}
