import { Component } from '@angular/core';
import * as L from "leaflet";
import 'leaflet/dist/leaflet.css';

@Component({
  selector: 'app-find-us',
  standalone: true,
  imports: [],
  templateUrl: './find-us.component.html',
  styleUrl: './find-us.component.scss'
})
export class FindUsComponent {
  map!: L.Map;
  location: L.LatLngExpression = [56.59337504675528, 16.16079803139656];
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
