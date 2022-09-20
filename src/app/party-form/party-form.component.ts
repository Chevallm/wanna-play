import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-party-form',
  templateUrl: './party-form.component.html',
  styleUrls: ['./party-form.component.scss']
})
export class PartyFormComponent implements OnInit {

    createPartyForm?: FormGroup;

  constructor(
      private readonly fb: FormBuilder,
      public dialogRef: MatDialogRef<PartyFormComponent>
  ) { }

  ngOnInit(): void {
      this.createPartyForm = this.fb.group({
          game: [],
          maxSlots: [2, [Validators.min(2)]],
          date: [Date.now(), [Validators.required]]
      });
  }

    create() {
      if (this.createPartyForm?.valid) {
          this.dialogRef.close(this.createPartyForm.value)
      }
    }
}
