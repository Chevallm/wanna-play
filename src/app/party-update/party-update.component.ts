import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Party} from '../models/party';

@Component({
  selector: 'app-party-update',
  templateUrl: './party-update.component.html',
  styleUrls: ['./party-update.component.scss']
})
export class PartyUpdateComponent implements OnInit {

    updatePartyForm?: FormGroup;
    party: Party;

    get participants() {
        return this.updatePartyForm?.get('participants') as FormArray;
    }

    constructor(
        private readonly fb: FormBuilder,
        public dialogRef: MatDialogRef<PartyUpdateComponent>,
        @Inject(MAT_DIALOG_DATA) party: Party
    ) {
        this.party = party;
    }

    ngOnInit(): void {
        this.updatePartyForm = this.fb.group({
            game: [this.party.game],
            maxSlots: [this.party.maxSlots, [Validators.min(2)]],
            date: [this.party.date, [Validators.required]],
            participants: this.fb.array(this.party.participants.map(participant => this.fb.control(participant.name)))
        });
    }

    update() {
        if (this.updatePartyForm?.valid) {
            this.dialogRef.close(this.updatePartyForm.value)
        }
    }

    close() {
        this.dialogRef.close()
    }

}
