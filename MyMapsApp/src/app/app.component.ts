import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { delay } from 'q';

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
  constructor(private http : HttpClient) {
    this.findMe();
  }
  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        delay(1000);
        var url1 = `https://maps.googleapis.com/maps/api/geocode/json?latlng=`
        var url = `${url1}${position.coords.latitude},${position.coords.longitude}&key=AIzaSyA6drxv-AWS04C1Po9-bU_1UQxKBX3lP2M`;
       this.http.get(url)
       .subscribe(res=> {
         console.log(JSON.stringify(res))
       })
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}
