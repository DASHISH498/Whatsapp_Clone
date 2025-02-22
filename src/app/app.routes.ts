import { Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';

export const routes: Routes = [
    { path: "" , component: SidebarComponent},
    { path: "chat/:id" , component: ChatBoxComponent},
    
];
