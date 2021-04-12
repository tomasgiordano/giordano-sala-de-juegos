import { FireChatService } from '../../service/fire-chat.service';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-messege-list',
  templateUrl: './messege-list.component.html',
  styleUrls: ['./messege-list.component.scss']
})
export class MessegeListComponent implements OnInit {

  bottom: HTMLElement;
  listMsg : [];

  constructor(private fc : FireChatService, private render : Renderer2 ) { }

  ngOnInit(): void {
    this.bottom = document.getElementById('bottom');

    this.fc.getMsg('user').subscribe((aux : any) => {
      this.listMsg = aux;
      this.listMsg.sort((_a1 : any,_a2 : any)=>{
        const a = _a1.timeSend;
        const b = _a2.timeSend;
        if(a > b){
          return 1;
        }else if(b > a){
          return -1;
        }
        return 0;

      });
      setTimeout(() => {
        this.bottom.scrollIntoView();
      }, 500);
    });
  }

}
