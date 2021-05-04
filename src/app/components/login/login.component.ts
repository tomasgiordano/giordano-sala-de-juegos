import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { FirebaseService } from 'src/app/services/firebase.service';
import { LoginService } from 'src/app/services/loginService/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  error : string = "";
  correo :string = '';
  clave : string = '';
  flag : boolean = false;

  formLogin : FormGroup;

  constructor(
    @Inject(DOCUMENT) private _document,
    public loginService : LoginService,
    public router : Router,
    private fb : FormBuilder) { }
  ngOnInit(): void {
    this._document.body.classList.add('bodybg-color');
    this.formLogin = this.fb.group({
      correo : ['',[
        Validators.required,
      ]],
      clave : ['',[
        Validators.required,
      ]]
    })
  }

  ngOnDestroy() {
    this._document.body.classList.remove('bodybg-color');
  }

  async Login()
  {
    this.error =' ';
    if(this.formLogin.valid){
      let correo = this.formLogin.get('correo').value;
      let clave = this.formLogin.get('clave').value;
      this.loginService.SignIn(correo,clave)
      .then(()=>{
        this.loginService.SetSesionActual(correo);
        this.router.navigate(['/home']);
      }).catch(aux=>{
        this.error ='No existe usuario';
      })
    }
  }

  Register()
  {
    this.router.navigate(['./registro']);
  }

  async onSignInAnonimous()
  {
    this.error =' ';
      let correo = "anonimus@anonimus.com";
      let clave = "123456";
      this.loginService.SignIn(correo,clave)
      .then(()=>{
        this.loginService.SetSesionActual(correo);
        this.router.navigate(['/home']);
      }).catch(aux=>{
        this.error ='No existe usuario';
      })
    
  }
}
