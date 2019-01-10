import { Component, OnInit } from '@angular/core';
import { WebsocketContactService } from '../websocket.contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-websocket-comp-test',
  templateUrl: './websocket-comp-test.component.html',
  styleUrls: ['./websocket-comp-test.component.css']
})
export class WebsocketCompTestComponent implements OnInit {

  realTimeFeed: [any] = ["There is no feed now"];
  sub: Subscription;

  constructor(private websocketContactService: WebsocketContactService) { 
    
  }

  ngOnInit() {
    this.manageRealTimeFeed();    
  }

  manageRealTimeFeed(): void{
    //this.realTimeFeed = this.realTimeFeed + feed;
    console.log("The getRealTimeFeed() function is being called");
    this.sub = this.websocketContactService.getRealTimeFeed().subscribe(feed => {
      //console.log("The incoming feed is = "+feed);
      this.realTimeFeed = JSON.parse(feed);
      //console.log("The feed is assigned to var");
    });
  }

}
