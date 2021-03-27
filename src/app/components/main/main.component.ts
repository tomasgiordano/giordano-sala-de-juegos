import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  email = '';

  constructor(private firebaseService:FirebaseService) { 
  }

  ngOnInit(): void {
    this.email = localStorage.getItem('user');
  }

}
