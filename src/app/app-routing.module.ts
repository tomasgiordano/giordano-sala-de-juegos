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
import { TatetiComponent } from './juegos/tateti/tateti.component';
import { PiePapTijComponent } from './juegos/pie-pap-tij/pie-pap-tij.component';
import { StartTatetiComponent } from './juegos/tateti/start-tateti/start-tateti.component';
import { StartPPTComponent } from './juegos/pie-pap-tij/start-ppt/start-ppt.component';

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
        path: 'TaTeTi', component: TatetiComponent,
        children: [
        { path: 'startTTT', component: StartTatetiComponent, pathMatch:'full'},
      ] 
      },
      {
        path: 'pierdraPapelTijera', component: PiePapTijComponent,
        children: [
          { path: 'startPPT', component: StartPPTComponent, pathMatch:'full'},
        ]
      },
      {
        component: MainComponent,
        path:"",
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
