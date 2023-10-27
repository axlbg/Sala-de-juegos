import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { QuiensoyComponent } from './pages/quiensoy/quiensoy.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { perfilesGuard } from './guards/perfiles.guard';
import { ChatComponent } from './pages/chat/chat.component';
import { AhorcadoComponent } from './pages/ahorcado/ahorcado.component';
import { MayormenorComponent } from './pages/mayormenor/mayormenor.component';
import { PreguntadosComponent } from './pages/preguntados/preguntados.component';
import { TatetiComponent } from './pages/tateti/tateti.component';
import { TableroComponent } from './pages/tablero/tablero.component';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';
import { TablaAhorcadoComponent } from './pages/tablas/tabla-ahorcado/tabla-ahorcado.component';
import { TablaMayormenorComponent } from './pages/tablas/tabla-mayormenor/tabla-mayormenor.component';

const routes: Routes = [
  { path: '', component: HomeComponent /*canActivate: [perfilesGuard]*/ },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'quiensoy', component: QuiensoyComponent },
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [perfilesGuard],
  },
  {
    path: 'estadisticas',
    component: EstadisticasComponent,
    canActivate: [perfilesGuard],
    children: [
      { path: 'ahorcado', component: TablaAhorcadoComponent },
      { path: 'mayormenor', component: TablaMayormenorComponent },
    ],
  },
  { path: 'registro', component: RegistroComponent },
  {
    path: 'juegos',
    component: TableroComponent,
    canActivate: [perfilesGuard],
    children: [
      { path: 'ahorcado', component: AhorcadoComponent },
      { path: 'mayormenor', component: MayormenorComponent },
      { path: 'preguntados', component: PreguntadosComponent },
      { path: 'tateti', component: TatetiComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
