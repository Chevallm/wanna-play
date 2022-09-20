import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {FormBuilder, FormGroup} from '@angular/forms';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginEmailPasswordForm?: FormGroup;

  constructor(
      private readonly fb: FormBuilder,
      public auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
      this.loginEmailPasswordForm = this.fb.group({
          email: [],
          password: []
      });
  }

  submit(event: SubmitEvent) {
      const submitType = event.submitter?.dataset['submitType'];
      const {email, password} = this.loginEmailPasswordForm?.value;
      if (submitType === 'signin') {
          this.signInWithEmailAndPassword(email, password);
      }
      if (submitType === 'register') {
          this.registerWithEmailAndPassword(email, password);
      }
  }

  signInWithEmailAndPassword(email: string, password: string) {
    this.auth.signInWithEmailAndPassword(email, password);
  }

    registerWithEmailAndPassword(email: string, password: string) {
    this.auth.createUserWithEmailAndPassword(email, password);
  }

    loginWithGoogle() {
        this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
}
