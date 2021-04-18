import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ChatModuleModule } from './chat-module.module';
import { SalaChatComponent } from './sala-chat/sala-chat.component';

const routes: Routes = [
  {
    path: "",
    component:SalaChatComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatModuleRoutingModule { }
