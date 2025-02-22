import { Component, inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatTabsModule, CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  private router = inject(Router)

  listBOx = [
    {
      linkName: 'Archive chat'
    },
    {
      linkName: 'Mute notifications'
    },
    {
      linkName: 'Pin chat'
    },
    {
      linkName: 'Label chat'
    },
    {
      linkName: 'Mark as unread'
    },
    {
      linkName: 'Add to favourites'
    },
    {
      linkName: 'Block'
    },
    {
      linkName: 'Delete chat'
    },
  ]

  chatListt = [
    {
      id: '1',
      name: 'Rajesh',
      senderTime : '7:27pm'
    },
    {
      id: '2',
      name: 'Ankur',
      senderTime : '8/7/2023'
    },
    {
      id: '3',
      name: 'Rajpal',
      senderTime : '6:18pm'
    },
    {
      id: '4',
      name: 'Simmy',
      senderTime : 'Friday'
    },
    {
      id: '5',
      name: 'Ranjana',
      senderTime : '8/12/2023'
    },
    {
      id: '6',
      name: 'Amisha',
      senderTime : '9:41pm'
    },
    {
      id: '7',
      name: 'Pummy',
      senderTime : '1:52pm'
    },
    {
      id: '8',
      name: 'Tina',
      senderTime : '12/10/2024'
    },
    {
      id: '9',
      name: 'Dipender',
      senderTime : '5:27pm'
    },
    {
      id: '10',
      name: 'Rameshwar',
      senderTime : '4/5/2024'
    },
    {
      id: '11',
      name: 'Ashish',
      senderTime : '7:29pm'
    },
  ]

  openChat(chatid:any){
   this.router.navigate([`/chat/${chatid}`])
  }
}
