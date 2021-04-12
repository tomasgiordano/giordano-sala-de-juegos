import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { RegistroComponent } from './components/registro/registro.component';
import { Router } from '@angular/router'
import { SalaChatComponent } from './components/sala-chat/sala-chat.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    component: LoginComponent,
    path:"login"
  },
  {
    component: RegistroComponent,
    path: "registro"
  },
  {
    component: HomeComponent,
    path: "home",
    children:[
      {
        component: QuienSoyComponent,
        path: "quien-soy"
      },
      {
        component: SalaChatComponent,
        path: "chat"
      },
      {
        component: MainComponent,
        path:"",
      }
    ]
  },
  {
    component: ErrorComponent,
    path:"**"
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
