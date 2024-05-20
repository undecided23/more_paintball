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
  location: L.LatLngExpression = [56.530638590136626, 16.077687686052577];
  googleDirectionLink = `https://www.google.com/maps/dir/?api=1&destination=${this.location.toString()}`;
  ngOnInit() {
    this.initMap();
  }

  initMap() {
    this.map = L.map('map', {
      maxZoom: 15,
      minZoom: 10,
    }).setView(this.location, 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    const icon = L.icon({
      iconUrl: '../../../assets/map-icon.webp',
      iconSize: [70, 70],
      iconAnchor: [35, 35],
      popupAnchor: [1, -34],
    });

    L.marker(this.location, { icon }).addTo(this.map)
  }
}
