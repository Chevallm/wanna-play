import {Dialog} from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {MatDialog} from '@angular/material/dialog';
import firebase from 'firebase/compat/app';
import {map, Observable, of, tap} from 'rxjs';
import {Party} from '../models/party';
import {PartyFormComponent} from '../party-form/party-form.component';
import {PartyService} from '../services/party.service';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.scss']
})
export class PartiesComponent implements OnInit {

    parties$: Observable<Party[]> = of([]);
    me$: Observable<firebase.User | null> = of(null);

  constructor(
      public dialog: MatDialog,
      private readonly partyService: PartyService,
      private auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
      this.me$ = this.auth.user;
      this.parties$ = this.partyService.getParties().pipe(tap(w=> console.log(w)));
  }

    create() {
      const createDialog = this.dialog.open(PartyFormComponent, {width: '250px'});
      createDialog.afterClosed().subscribe(result => {
        if (result) {
            this.partyService.createParty(result).subscribe(res => console.log(res));
        }
      });
    }

    ownerOfTheParty(party: Party) {
      return this.me$.pipe(
          map(me => party.owner.uid === me?.uid)
      );
  }

    abort(party: Party) {
        this.partyService.abort(party)
    }
}
