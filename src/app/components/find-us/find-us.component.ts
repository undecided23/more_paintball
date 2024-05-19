import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import * as L from "leaflet";
import 'leaflet/dist/leaflet.css';

@Component({
  selector: 'app-find-us',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './find-us.component.html',
  styleUrl: './find-us.component.scss'
})
export class FindUsComponent {
  map!: L.Map;
  location: L.LatLngExpression = [56.59337504675528, 16.16079803139656];
  googleDirectionLink = 'https://www.google.com/maps/dir/?api=1&destination=56.59337504675528,16.16079803139656';
  ngOnInit() {
    this.initMap();
  }

  initMap() {
    this.map = L.map('map').setView(this.location, 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker(this.location).addTo(this.map)
      .bindPopup('More Paintball')
      .openPopup();
  }
}
