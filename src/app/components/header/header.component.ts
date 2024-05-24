import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public links: Link[] = [
    {
      title: 'Home',
      path: '/',
      icon: 'home'
    },
    {
      title: 'Find us',
      path: '/find-us',
      icon: 'map'
    },
    {
      title: 'About us',
      path: '/about-us',
      icon: 'info'
    },
    {
      title: 'Contact us',
      path: '/contact-us',
      icon: 'email'
    }
  ]

}

interface Link {
  title: string;
  path: string;
  icon: string;
}
