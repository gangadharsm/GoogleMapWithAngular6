import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My first AGM project';
  lat: number;
  lng: number;
  zoom: number = 16;
  constructor() {
    this.findMe();
  }
  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}
