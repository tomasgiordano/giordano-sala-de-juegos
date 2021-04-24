import { FireChatService } from '../../service/fire-chat.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-messege-send',
  templateUrl: './messege-send.component.html',
  styleUrls: ['./messege-send.component.scss']
})
export class MessegeSendComponent implements OnInit {

  msg : string = '';

  constructor(private fc : FireChatService, private loginService : LoginService) { }

  ngOnInit(): void {
  }

  send(){
    if(this.msg != ''){
      
      let user = this.loginService.GetSesionActual()
      user = (JSON.parse(user))?.correo;

      this.fc.sengMsg("user",this.msg,user);
      this.msg = '';
    }
  }

}
