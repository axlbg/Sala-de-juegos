import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private firestore: AngularFirestore) {}

  traerMensajes() {
    const collection = this.firestore.collection('chat', (ref) =>
      ref.orderBy('hora', 'asc').limit(100)
    );

    return collection.valueChanges();
  }

  enviarMensaje(msj: any) {
    this.firestore.collection('chat').add(msj);
  }
}
