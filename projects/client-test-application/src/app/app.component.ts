import { Component } from '@angular/core';

import { NgPikchatClientService } from "ng-pikchat-client";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client-test-application';

  public connected = false;

  public connectUrl: string = 'http://localhost:3000';
  public userId: string = '1';
  public sessionId: string = '1';
  public accessToken: string = '1';
  public apiKey: string = '1aderygjiyt6ujgd6jjgfb';

  public onlineUsers: any = [];
  public chatMessages: any = [];

  public activeChatScreenUser: string = '';
  public textMessage: string = '';

  constructor(private pikchat: NgPikchatClientService) {
    
  } 


  connect() {
    this.pikchat.setUri(`${this.connectUrl}?userId=${this.userId}&accessToken=${this.accessToken}&sessionId=${this.sessionId}&apiKey=${this.apiKey}`);
    this.pikchat.connect();
    this.getOnlineUsers();
    this.getSingleChatMessage();
  }

  disconnect() {
    this.pikchat.emit('CLOSE_CONNECTION', {});
  }

  setActiveChatScreenUser(userId: string) {
    this.activeChatScreenUser = userId;
    this.chatMessages = [];
    this.pikchat.emit('GET_MESSAGES', {
      limit: 20,
      offset: 0,
      senderId: userId
    });
  }


  sendMessage() {
    if (this.textMessage != '') {
      this.pikchat.emit('SINGLE_CHAT_MESSAGE', {
        senderId: this.userId,
        receiverId: this.activeChatScreenUser,
        messageType: 1,
        message: this.textMessage
      });
      this.textMessage = '';
    }
  }
  /**
   * 
   */
  getOnlineUsers() {
    this.pikchat.listen('ONLINE_USERS').subscribe((data) => {
      console.log(data);
      this.onlineUsers = data;
    });

    this.pikchat.listen('connect').subscribe(() => {
      console.log('connection success');
      this.connected = true;
    });

    this.pikchat.listen('disconnect').subscribe(() => {
      console.log('connection disconnected');
      this.connected = false;
    });

    this.pikchat.listen('GET_MESSAGES').subscribe((data: any) => {
      console.log('msg received on GET_MESSAGE');
      console.log(data);
      this.chatMessages = data.rows;
    });

    this.pikchat.listen('OFFLINE_MESSAGES').subscribe((data) => {
      console.log('msg received on OFFLINE_MESSAGES');
      console.log(data);
    });
    
  }

  /**
   * 
   */
  getSingleChatMessage() {
    this.pikchat.listen('SINGLE_CHAT_MESSAGE').subscribe((data) => {
      console.log(data);
      this.chatMessages.push(data);
    });
  }



}
