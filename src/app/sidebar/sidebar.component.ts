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
      senderTime : '7:27'
    },
    {
      name: 'Ankur',
      senderTime : '7:26'
    },
    {
      name: 'Rajpal',
      senderTime : '6:18'
    },
    {
      name: 'Simmy',
      senderTime : '7:27'
    },
    {
      name: 'Ranjana',
      senderTime : '8:15'
    },
    {
      name: 'Amisha',
      senderTime : '9:41'
    },
    {
      name: 'Pummy',
      senderTime : '1:52'
    },
    {
      name: 'Tina',
      senderTime : '7:26'
    },
    {
      name: 'Dipender',
      senderTime : '5:27'
    },
    {
      name: 'Rameshwar',
      senderTime : '8:47'
    },
    {
      name: 'Ashish',
      senderTime : '7:29'
    },
    {
      name: 'Ashish',
      senderTime : '7:29'
    },
    {
      name: 'Ashish',
      senderTime : '7:29'
    },
    {
      name: 'Ashish',
      senderTime : '7:29'
    },
    {
      name: 'Ashish',
      senderTime : '7:29'
    },
  ]
}
