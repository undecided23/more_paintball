import { Component } from '@angular/core';
import { FindUsComponent } from '../find-us/find-us.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    FindUsComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
