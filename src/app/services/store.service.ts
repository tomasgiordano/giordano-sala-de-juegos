  
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(public AngularFirestore : AngularFirestore) { }

  getDoc(collection: string){
    return this.AngularFirestore.collection(collection).get();
  }

  setDoc(collection: string, data: any){
    return this.AngularFirestore.collection(collection).add(data);
  }
}