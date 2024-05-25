import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Overlay } from 'ol';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import { OSM } from 'ol/source';

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
export class FindUsComponent implements OnInit {
  map!: Map;
  location = [16.077687686052577, 56.530638590136626];
  googleDirectionLink = `https://www.google.com/maps/dir/?api=1&destination=${this.location[1]},${this.location[0]}`;
  ngOnInit() {
    this.initMap();
  }

  initMap() {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        })
      ],
      view: new View({
        center: fromLonLat(this.location),
        zoom: 13,
        maxZoom: 16,
        minZoom: 10,
      }),
      controls: [],
    });

    const markerElement = document.createElement('div');
    markerElement.className = 'marker';
    markerElement.style.backgroundImage = 'url(../../../assets/map-icon.webp)';
    markerElement.style.width = '70px';
    markerElement.style.height = '70px';
    markerElement.style.backgroundSize = 'contain';

    const marker = new Overlay({
      position: fromLonLat(this.location),
      positioning: 'center-center',
      element: markerElement,
      stopEvent: false
    });

    this.map.addOverlay(marker);
  }
}
