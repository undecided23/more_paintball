import { Component } from '@angular/core';
import { FindUsComponent } from '../find-us/find-us.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    FindUsComponent,
    HomeComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
