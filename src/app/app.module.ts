import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { QuiensoyComponent } from './pages/quiensoy/quiensoy.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { RegistroComponent } from './pages/registro/registro.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { ChatComponent } from './pages/chat/chat.component';
import { AhorcadoComponent } from './pages/ahorcado/ahorcado.component';
import { MayormenorComponent } from './pages/mayormenor/mayormenor.component';
import { PreguntadosComponent } from './pages/preguntados/preguntados.component';
import { TatetiComponent } from './pages/tateti/tateti.component';
import { TableroComponent } from './pages/tablero/tablero.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuiensoyComponent,
    RegistroComponent,
    NavbarComponent,
    ChatComponent,
    AhorcadoComponent,
    MayormenorComponent,
    PreguntadosComponent,
    TatetiComponent,
    TableroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBl-CeR2fZuyeQ7WonvTyXdUl8zkWVE5cs',
      authDomain: 'sala-de-juego.firebaseapp.com',
      projectId: 'sala-de-juego',
      storageBucket: 'sala-de-juego.appspot.com',
      messagingSenderId: '478013641670',
      appId: '1:478013641670:web:f266d42d7fd861837158c7',
      measurementId: 'G-HC4LV4X6FL',
    }),
    provideAuth(() => getAuth()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
