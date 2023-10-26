import { Component, OnInit } from '@angular/core';
import { AutentificadorService } from 'src/app/services/autentificador.service';
import { ChatService } from 'src/app/services/chat.service';
import * as moment from 'moment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  nuevoMensaje: string = '';
  mensajes: any = [];

  constructor(
    public autentificador: AutentificadorService,
    private chatService: ChatService
  ) {
    this.chatService.traerMensajes().subscribe((messages) => {
      if (messages !== null) {
        this.mensajes = messages;
        this.mensajes.sort((a: any, b: any) => a.date - b.date);
        for (let i = 0; i < this.mensajes.length; i++) {
          const chat = this.mensajes[i];
          chat.date = moment(new Date(chat.date)).format('DD-MM-YYYY HH:mm:ss');
        }
        setTimeout(() => {
          this.scrollToTheLastElementByClassName();
        }, 100);
      }
    });
  }

  enviarMensaje() {
    if (this.nuevoMensaje == '') return;

    const d = new Date();
    let msj = {
      emisor: this.autentificador.userName,
      texto: this.nuevoMensaje,
      hora: moment(new Date()).format('DD-MM-YYYY HH:mm:ss'),
    };

    this.nuevoMensaje = '';

    this.mensajes.push(msj);

    this.chatService.enviarMensaje(msj);
    this.scrollToTheLastElementByClassName();
  }

  scrollToTheLastElementByClassName() {
    const elements = document.getElementsByClassName('msj');
    const lastElement: any = elements[elements.length - 1];
    const toppos = lastElement.offsetTop;
    //@ts-ignore
    document.getElementById('chatbox').scrollTop = toppos;
  }
}
