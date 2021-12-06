import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as socketIO from 'socket.io-client';

const events = {
  DISCONNECT: 'disconnect',
  GET_MESSAGES: 'GET_MESSAGES',
  OFFLINE_MESSAGES: 'OFFLINE_MESSAGES',
  ONLINE_USERS: 'ONLINE_USERS',
  SINGLE_CHAT_MESSAGE : 'SINGLE_CHAT_MESSAGE',
  SINGLE_CHAT_MESSAGE_DELIVERED : 'SINGLE_CHAT_MESSAGE_DELIVERED',
  SINGLE_CHAT_MESSAGE_READ : 'SINGLE_CHAT_MESSAGE_READ'
};

@Injectable({
  providedIn: 'root'
})
export class NgPikchatClientService {

  socket: any = null;
  public EVENTS : object = events;
  private uri: string = 'http://localhost:3000?userId=5&accessToken=25&sessionId=345&apiKey=67gh6';

  constructor() { }

  /**
   * 
   * @param url 
   */
  public setUri(url: string) {
    this.uri = url;
  }

  /**
   * 
   * @returns 
   */
  public getMessagesListener() {
    return this.listen(events.GET_MESSAGES);
  };

  /**
   * 
   * @param data 
   * @returns 
   */
  public emitGetMessages(data: any) {
    return this.emit(events.GET_MESSAGES, data);
  };

  /**
   * 
   */
  public oflineMessagesListener() {
    return this.listen(events.OFFLINE_MESSAGES);
  };

  /**
   * 
   * @param data 
   * @returns 
   */
  public emitOflineMessages(data: any) {
    return this.emit(events.OFFLINE_MESSAGES, data);
  };

  /**
   * 
   * @returns 
   */
  public onlineUsersListener() {
    return this.listen(events.ONLINE_USERS);
  };

  /**
   * 
   * @param data 
   * @returns 
   */
  public emitOnlineUsers(data: any) {
    return this.emit(events.ONLINE_USERS, data);
  };

  /**
   * 
   * @returns 
   */
  public singleChatMessageListener() {
    return this.listen(events.SINGLE_CHAT_MESSAGE);
  };

  /**
   * 
   * @param data 
   * @returns 
   */
  public emitSingleChatMessages(data: any) {
    return this.emit(events.SINGLE_CHAT_MESSAGE, data);
  };

  /**
   * 
   * @returns 
   */
  public singleChatMessageDeliveredListener() {
    return this.listen(events.SINGLE_CHAT_MESSAGE_DELIVERED);
  };

  /**
   * 
   * @param data 
   * @returns 
   */
  public emitSingleChatMessageDelivered(data: any) {
    return this.emit(events.SINGLE_CHAT_MESSAGE_DELIVERED, data);
  };

  /**
   * 
   * @returns 
   */
  public singleChatMessageReadListener() {
    return this.listen(events.SINGLE_CHAT_MESSAGE_READ);
  };

  /**
   * 
   * @param data 
   * @returns 
   */
  public emitSingleChatMessageRead(data: any) {
    return this.emit(events.SINGLE_CHAT_MESSAGE_READ, data);
  };
  
  /**
   * 
   * @returns 
   */
  public connect() {
    return this.socket = socketIO.io(this.uri);
  }

  /**
   * 
   * @param eventName 
   * @returns 
   */
  public listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data: any) => {
        subscriber.next(data);
      });
    });
  }

  /**
   * 
   * @param eventName 
   * @param data 
   */
  public emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }

  

}
