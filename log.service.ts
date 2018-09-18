import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

/*@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class LogService {

  constructor(private swUpdate: SwUpdate) { 
    swUpdate.available.subscribe(event => {
      alert("A new update is available. Please refresh page. current version is = "+event.current.hash+" available version is = "+event.available.hash);
    });
    swUpdate.activated.subscribe(event => {
      alert("You app is updated. Current version is = "+event.current.hash+" Old version was = "+event.previous.hash);
    });
  }
}
