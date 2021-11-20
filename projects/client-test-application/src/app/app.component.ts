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

  public onlineUsers: any = [];
  public chatMessages: any = [];

  constructor(private pikchat: NgPikchatClientService) {
    this.pikchat.connect();
    this.getOnlineUsers();
    this.getSingleChatMessage();
  }


  /**
   * 
   */
  getOnlineUsers() {
    this.pikchat.listen('ONLINE_USERS').subscribe((data) => {
      console.log(data);
      this.onlineUsers = data;
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
