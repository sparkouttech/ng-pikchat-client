import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as socketIO from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class NgPikchatClientService {

  socket: any = null;
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
