import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutentificadorService } from 'src/app/services/autentificador.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    public autentificador: AutentificadorService,
    private ruteador: Router
  ) {}

  async deslogear(event: Event) {
    this.autentificador.deslogear();
    this.ruteador.navigate(['/login']);
  }
}
