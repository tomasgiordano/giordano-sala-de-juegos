import { userError } from '@angular/compiler-cli/src/transformers/util';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  email = ''

  constructor(private firebaseService:FirebaseService,private loginService:LoginService) { 
  }

  ngOnInit(): void {
    let user = this.loginService.GetSesionActual()
    user = (JSON.parse(user))?.correo;
    this.email = user;
  }
}
