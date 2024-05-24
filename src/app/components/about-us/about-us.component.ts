import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { FindUsComponent } from '../find-us/find-us.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [MatGridListModule, FindUsComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  

}
