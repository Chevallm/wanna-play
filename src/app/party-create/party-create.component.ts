import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-party-create',
  templateUrl: './party-create.component.html',
  styleUrls: ['./party-create.component.scss']
})
export class PartyCreateComponent implements OnInit {

    createPartyForm?: FormGroup;

  constructor(
      private readonly fb: FormBuilder,
      public dialogRef: MatDialogRef<PartyCreateComponent>
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

    close() {
        this.dialogRef.close()
    }
}
