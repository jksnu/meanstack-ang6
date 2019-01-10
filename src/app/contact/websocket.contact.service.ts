import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class WebsocketContactService {

  socket: any;
  observer: Observer<any>;
  myFeed:string[] = [];

  constructor() { }

  getRealTimeFeed(): Observable<string> {
    this.socket = io();
    this.myFeed = [];
    var me = this;
    this.socket.on('realTimeFeed', (feed:string) => {
      me.myFeed.push(feed);
      me.observer.next(JSON.stringify(me.myFeed));      
    });
    return new Observable(observer => {
      this.observer = observer;
    });
  }
}
