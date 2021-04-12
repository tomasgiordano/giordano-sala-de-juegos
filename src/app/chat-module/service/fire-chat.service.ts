import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireChatService {

  constructor(private dbFire : AngularFirestore) { }

  public getMsg(path : string){
    return this.dbFire.collection('/firechat/'+path+'/msg', ref => ref.orderBy('timeSend').limitToLast(10)).valueChanges()
  }

  public sengMsg(path : string, msg : string, sendBy : string){
    this.dbFire.collection('/firechat/'+path+'/msg/').add({
      text : msg,
      from : sendBy,
      timeSend : Date.now()
    });
  }
}
