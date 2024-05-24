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
      title: 'Hem',
      path: '/#home',
      icon: 'home'
    },
    {
      title: 'Banor',
      path: '/#maps',
      icon: 'map'
    },
    {
      title: 'Om oss',
      path: '/#about',
      icon: 'info'
    },
    {
      title: 'Boka',
      path: '/#booking',
      icon: 'email'
    }
  ]

}

interface Link {
  title: string;
  path: string;
  icon: string;
}
