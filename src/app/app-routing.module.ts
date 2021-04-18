import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TatetiComponent } from './juegos/tateti/tateti.component';
import { PiePapTijComponent } from './juegos/pie-pap-tij/pie-pap-tij.component';
import { StartTatetiComponent } from './juegos/tateti/start-tateti/start-tateti.component';
import { StartPPTComponent } from './juegos/pie-pap-tij/start-ppt/start-ppt.component';
import { MemotestComponent } from './juegos/memotest/memotest.component';
import { StartMemotestComponent } from './juegos/memotest/start-memotest/start-memotest.component';

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
        loadChildren: () => import('./chat-module/chat-module.module').then(m => m.ChatModuleModule),
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
      { path: 'memotest', component: MemotestComponent,
      children: [
        { path: 'startMemotest', component:StartMemotestComponent , pathMatch:'full'},
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
