import { Component, OnInit, Output } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public firebaseService: FirebaseService,private route:Router,public loginService:LoginService) { }

  email = ''
  opened: boolean;
  show:boolean = (JSON.parse(this.loginService.GetSesionActual()))?.correo!="anonimus@anonimus.com";

  ngOnInit(): void {
    console.log(this.show);
    this.email = localStorage.getItem('user');
    if(this.email==null)
    {
      this.route.navigate(['/login']);
    }
  }

  logout()
  {
    this.firebaseService.logout();
    this.route.navigate(['/login']);
  }

  SideNavBtnAccion(){
    this.opened = false;
  }
}
