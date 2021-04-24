import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.scss']
})
export class MsgComponent implements OnInit {

  @Input() text : string;
  @Input() from : string;
  @Input() msg: any;

  user: string = '';
  constructor(public datePipe : DatePipe,public LoginService:LoginService) { }

  ngOnInit(): void {
    this.user = this.LoginService.GetSesionActual()
    this.user = (JSON.parse(this.user))?.correo;
  }

}
