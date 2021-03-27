import { Component, OnInit, Output } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public firebaseService: FirebaseService,private route:Router) { }

  email = ''

  ngOnInit(): void {
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
}
