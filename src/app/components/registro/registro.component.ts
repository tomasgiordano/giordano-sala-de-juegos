import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistroComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document, private route:Router,public firebaseService:FirebaseService) { }
  error:string = '';
  clave:string = '';
  correo:string = '';
  isSignedIn = false;

  ngOnInit(): void {
    this._document.body.classList.add('bodybg-color');
    if(localStorage.getItem('user')!=null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }
  ngOnDestroy() {
    this._document.body.classList.remove('bodybg-color');
  }

  Cancelar()
  {
    this.route.navigate(['/login']);
  }

  Registrar()
  {
    console.log(this.correo,this.clave);
  }
  
  async onSignUp()
  {
    await this.firebaseService.signup(this.correo,this.clave);
    if(this.firebaseService.isLoggedIn)
    {
      this.isSignedIn = true
      this.route.navigate(['/home']);
    }
  }
}

