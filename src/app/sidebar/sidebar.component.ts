import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatTabsModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

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
      name: 'Rajesh',
      senderTime : '7:27pm'
    },
    {
      name: 'Ankur',
      senderTime : '8/7/2023'
    },
    {
      name: 'Rajpal',
      senderTime : '6:18pm'
    },
    {
      name: 'Simmy',
      senderTime : 'Friday'
    },
    {
      name: 'Ranjana',
      senderTime : '8/12/2023'
    },
    {
      name: 'Amisha',
      senderTime : '9:41pm'
    },
    {
      name: 'Pummy',
      senderTime : '1:52pm'
    },
    {
      name: 'Tina',
      senderTime : '12/10/2024'
    },
    {
      name: 'Dipender',
      senderTime : '5:27pm'
    },
    {
      name: 'Rameshwar',
      senderTime : '4/5/2024'
    },
    {
      name: 'Ashish',
      senderTime : '7:29pm'
    },
  ]
}
