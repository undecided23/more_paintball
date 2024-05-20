import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  instagramLink(): void {
    const instagramLink = 'https://www.instagram.com/more_paintball/';
    window.open(instagramLink, '_blank');
  }
}
