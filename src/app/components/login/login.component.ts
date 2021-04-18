import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document, private route:Router, public firebaseService:FirebaseService) { }
  error:string = '';
  clave:string = '';
  correo:string = '';
  isSignedIn = false;

  ngOnInit(){
    this._document.body.classList.add('bodybg-color');
    if(localStorage.getItem('user')!=null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }

  ngOnDestroy() {
    this._document.body.classList.remove('bodybg-color');
  }

  async onSignIn()
  {
    await this.firebaseService.signin(this.correo,this.clave);
    if(this.firebaseService.isLoggedIn)
      this.isSignedIn = true
    this.route.navigate(['/home']);
  }

  Registrar()
  {
    this.route.navigate(['./registro']);
  }

  async onSignInAnonimous()
  {
    this.correo='anonimous@anonimous.com';
    this.clave='123456';
    await this.firebaseService.signin(this.correo,this.clave);
    if(this.firebaseService.isLoggedIn)
      this.isSignedIn = true
    this.route.navigate(['/home']);
  }
  
  handleLogout(){
    this.isSignedIn = false
  }
}
