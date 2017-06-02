import { Injectable } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

  loginData: any;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    afAuth.authState.subscribe(
      resp => { this.loginData = resp; },
      err => console.log(err)
    );
  }

  login() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
  }

  canActivate(): Observable<boolean> {
    return this.afAuth.authState
      .map(user => !!user)
      .do(u => !u ? this.router.navigate(['login']) : "");

  }
}