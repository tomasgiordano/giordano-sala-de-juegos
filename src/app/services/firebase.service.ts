import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;
  email = ''

  constructor(public firebaseAuth : AngularFireAuth) { }
  async signin(email: string, password:string)
  {
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true;
      localStorage.setItem('user',email);
      localStorage.setItem('uid',res.user.uid);
    });
  }
  async signup(email: string, password:string)
  {
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true;
      localStorage.setItem('user',email)
    });
  }

  logout(){
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }
}
