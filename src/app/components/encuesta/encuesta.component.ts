import { validateAndRewriteCoreSymbol } from '@angular/compiler-cli/src/ngtsc/imports';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { LoginService } from 'src/app/services/loginService/login.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  public forma : FormGroup;
  public email : string;
  constructor(private fb:FormBuilder,private storage:StoreService,private loginService:LoginService) { }

  ngOnInit(): void {
    let user = this.loginService.GetSesionActual()
    user = (JSON.parse(user))?.correo;
    this.email = user;

    this.forma = this.fb.group({
      'nombre':['',Validators.required],
      'apellido':['',Validators.required],
      'edad': ['',[Validators.required,Validators.min(18),Validators.max(99)]],
      'telefono':['',[Validators.required,Validators.max(9999999999)]],
      'pregunta1':['',Validators.required],
      'pregunta2':['',Validators.required],
      'pregunta3':['',Validators.required],
      'email':[this.email]
    });


  }

  public aceptar() : void
  {
    if(this.forma.valid)
    {
      this.storage.setDoc("Encuestas",this.forma.value);
      console.log(this.forma.value);
      this.forma.reset();
      window.alert("Encuesta enviada correctamente, gracias por participar!");
    }
    else{
      window.alert("Por favor, complete correctamente los campos antes de enviar el formulario.");
    }
  }
}
