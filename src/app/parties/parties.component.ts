import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {MatDialog} from '@angular/material/dialog';
import {map, Observable, of, take} from 'rxjs';
import {Party} from '../models/party';
import {User} from '../models/user';
import {PartyDetailComponent} from '../party-detail/party-detail.component';
import {PartyFormComponent} from '../party-form/party-form.component';
import {PartyService} from '../services/party.service';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.scss']
})
export class PartiesComponent implements OnInit {

    parties$: Observable<Party[] | null> = of(null);
    me: User | null = null;

  constructor(
      public dialog: MatDialog,
      private readonly partyService: PartyService,
      private auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
      this.auth.authState.pipe(
          take(1),
          map(firebaseUser => firebaseUser ? User.fromFirebase(firebaseUser) : null)
      ).subscribe(me => this.me = me)
      this.parties$ = this.partyService.getParties();
  }

    create() {
      const createDialog = this.dialog.open(PartyFormComponent, {width: '500px'});
      createDialog.afterClosed().subscribe(result => {
        if (result) {
            this.partyService.createParty(result);
        }
      });
    }

    ownerOfTheParty(party: Party) {
      return party.owner.uid === this.me?.uid
  }

    abort(party: Party) {
        this.partyService.abort(party)
    }

    join(party: Party) {
        if (this.me) {
            this.partyService.join(this.me, party)
        }
    }

    leave(party: Party) {
        if (this.me) {
            this.partyService.leave(this.me, party)
        }
    }

    isReserved(party: Party) {
        return party.participants.some(participant => participant.uid === this.me?.uid)
    }


    view(party: Party) {
        this.dialog.open(PartyDetailComponent, {width: '500px', data: {...party}})
    }
}
