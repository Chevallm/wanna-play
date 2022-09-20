import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {catchError, map, Observable, of} from 'rxjs';
import {fromPromise} from 'rxjs/internal/observable/innerFrom';
import {Party} from '../models/party';
import {PartyCreation} from '../models/party-creation';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class PartyService {

    partyCollection?: AngularFirestoreCollection<Party>;

  constructor(
      private readonly fireStore: AngularFirestore,
      private readonly auth: AngularFireAuth
  ) { }

    createParty(partyCreation: PartyCreation) {
      return this.auth.user.pipe(
          map(user => {
              if (user) {
                  const me = User.fromFirebase(user);
                  const party = new Party({
                      ...partyCreation,
                      uid: this.fireStore.createId(),
                      owner: me,
                      participants: [me]
                  });
                  return this.fireStore.collection('parties').doc(party.uid).set({...party});
              } else {
                  return null;
              }
          })
      );
    }

    getParties(): Observable<Party[]> {
      return this.fireStore.collection<Partial<Party>>('parties').valueChanges().pipe(
        map(parties => {
          return parties.map((party: any) =>
              new Party({
                  ...party,
                  date: party.date.toDate()
              })
          )
      }));
    }

    abort(party: Party): Observable<void> {
      const document = this.fireStore.collection<Party>('parties').doc(party.uid);
      return fromPromise(document.delete());
    }
}
