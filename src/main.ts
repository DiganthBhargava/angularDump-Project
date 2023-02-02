import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a (click)="attachFileDelete('a','b')" href="#">click here</a>
    <br>
    <a (click)="flushData()" href="#">click here</a>
    <br>
    <span>{{dataString}}</span>
    <br>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular <br><span>pretty sure u don't wanna!!! :P</span>
    </a>
  `,
})
export class App {
  name = 'My Home';
  json = {};
  data = {};
  dataString: String;
  attachFileDelete(panelTrue: any, panelFalse: any) {
    console.log(this.json);
    if (panelTrue) {
      this.json[panelTrue] = true;
    }
    if (panelFalse) {
      this.json[panelFalse] = false;
    }
    console.log(this.json);
    this.data = {
      data: {
        satDocId: 123,
        toggle: this.json,
      },
    };
    this.dataString = JSON.stringify(this.data);
    console.log('data2', this.data);
  }
  flushData() {
    this.dataString = ':P';
  }
}

bootstrapApplication(App);
