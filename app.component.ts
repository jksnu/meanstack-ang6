import { Component } from '@angular/core';
import { DataService } from './data.service';
import { ViewChild, AfterViewInit } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
 
  constructor(private _dataService: DataService, private logService: LogService){
    console.log("Inside the constructor of AppComponent");
  }

  ngAfterViewInit() {}  
}
