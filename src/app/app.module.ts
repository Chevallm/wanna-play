import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire/compat';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {environment} from '../environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {PartyCreateComponent} from './party-create/party-create.component';
import {PartiesComponent} from './parties/parties.component';
import { PartyDetailComponent } from './party-detail/party-detail.component';
import { PartyUpdateComponent } from './party-update/party-update.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PartiesComponent,
    PartyCreateComponent,
    PartyDetailComponent,
    PartyUpdateComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatCardModule,
        MatDialogModule,
        MatNativeDateModule,
        AngularFireModule.initializeApp({...environment.firebase}),
        MatDatepickerModule,
        MatTooltipModule,
        MatProgressSpinnerModule
    ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
