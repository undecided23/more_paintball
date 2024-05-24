import { Component } from '@angular/core';
import { FindUsComponent } from '../find-us/find-us.component';
import { HomeComponent } from '../home/home.component';
import { MapsComponent } from '../maps/maps.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    FindUsComponent,
    HomeComponent,
    MapsComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
