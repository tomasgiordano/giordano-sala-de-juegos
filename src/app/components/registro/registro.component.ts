import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { LoginService } from 'src/app/services/loginService/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  error : string = '';
  myForm : FormGroup;

  constructor(
    private loginService : LoginService,
    private router: Router,
    private fb : FormBuilder,
    @Inject(DOCUMENT) private _document
    ) {
    }
  ngOnInit(): void {
    this._document.body.classList.add('bodybg-color');
    this.myForm = this.fb.group({
      correo : ['',[
        Validators.required,
        Validators.email,
      ]],
      clave : ['',[
        Validators.required,
        Validators.minLength(6)
      ]]
    })
  }

  ngOnDestroy() {
    this._document.body.classList.remove('bodybg-color');
  }

  Cerrar(){
      this.router.navigate(['']);
  }

  btn_registrar(){
    this.error = '';

    if(this.myForm.valid){
      let correo = this.myForm.get('correo').value;
      let clave = this.myForm.get('clave').value;
      this.loginService.AgregarUsuario(correo,clave)
        .then(()=>{
          let user = new Usuario(correo,clave);
          this.loginService.guardarUsuario(user);
          console.log("OK!!!");
          this.Cerrar();
        }).catch(()=>{
          console.log("ERROR");
          this.error = 'Ya existe usuario';
        });
    }
  }
}
