import { validateAndRewriteCoreSymbol } from '@angular/compiler-cli/src/ngtsc/imports';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  public forma : FormGroup;

  constructor(private fb:FormBuilder,private storage:StoreService) { }

  ngOnInit(): void {
    this.forma = this.fb.group({
      'nombre':['',Validators.required],
      'apellido':['',Validators.required],
      'edad': ['',[Validators.required,Validators.min(18),Validators.max(99)]],
      'telefono':['',[Validators.required,Validators.max(9999999999)]],
      'pregunta1':['',Validators.required],
      'pregunta2':['',Validators.required],
      'pregunta3':['',Validators.required]
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
