import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.scss'
})
export class ChatBoxComponent implements OnInit {

  chatId: string | null = null;
 
  chatListt = [
    {
      id: '1',
      name: 'Rajesh',
      senderTime : '7:27pm',
      message:"hello my name is Rajesh"
    },
    {
      id: '2',
      name: 'Ankur',
      senderTime : '8/7/2023',
      message:"hello my name is Ankur"
    },
    {
      id: '3',
      name: 'Rajpal',
      senderTime : '6:18pm',
      message:"hello my name is Rajpal"
    },
    {
      id: '4',
      name: 'Simmy',
      senderTime : 'Friday',
      message:"hello my name is Simmy"
    },
    {
      id: '5',
      name: 'Ranjana',
      senderTime : '8/12/2023',
      message:"hello my name is Ranjana"
    },
    {
      id: '6',
      name: 'Amisha',
      senderTime : '9:41pm',
      message:"hello my name is Amisha"
    },
    {
      id: '7',
      name: 'Pummy',
      senderTime : '1:52pm',
      message:"hello my name is Pummy"
    },
    {
      id: '8',
      name: 'Tina',
      senderTime : '12/10/2024',
      message:"hello my name is Tina"
    },
    {
      id: '9',
      name: 'Dipender',
      senderTime : '5:27pm',
      message:"hello my name is Dipender"
    },
    {
      id: '10',
      name: 'Rameshwar',
      senderTime : '4/5/2024',
      message:"hello my name is Rameshwar"
    },
    {
      id: '11',
      name: 'Ashish',
      senderTime : '7:29pm',
      message:"hello my name is Ashish"
    },
  ]
  filteredChat: any = null;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.chatId = params.get('id'); 
      this.filteredChat = this.chatListt.find(chat => chat.id === this.chatId);
    });
  }
}
