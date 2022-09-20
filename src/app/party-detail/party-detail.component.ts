import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Party} from '../models/party';

@Component({
  selector: 'app-party-detail',
  templateUrl: './party-detail.component.html',
  styleUrls: ['./party-detail.component.scss']
})
export class PartyDetailComponent implements OnInit {

    party: Party;

  constructor(
      @Inject(MAT_DIALOG_DATA)
      private partyData: Party
  ) {
      this.party = partyData
  }

  ngOnInit(): void {
  }

}
