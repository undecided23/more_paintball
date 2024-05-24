import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.scss'
})
export class BackToTopComponent {
  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    const element = document.querySelector('.back-to-top');
    
    if (element) {
      if (window.scrollY < 80) {
        element.classList.add('hide');
      } else {
        element.classList.remove('hide');
      }
    }

    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + window.innerHeight;
    const max = document.documentElement.scrollHeight;
    if (pos >= max && element) {
        element.classList.add('raised');
    } else if (element) {
        element.classList.remove('raised');
    }
  }
}
