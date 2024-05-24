import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public links: Link[] = [
    {
      title: 'HEM',
      path: '/#home',
      icon: 'home'
    },
    {
      title: 'BANOR',
      path: '/#maps',
      icon: 'map'
    },
    {
      title: 'OM OSS',
      path: '/#about',
      icon: 'info'
    },
    {
      title: 'BOKA',
      path: '/#booking',
      icon: 'email'
    }
  ]

  constructor(private deviceDetector: DeviceDetectorService) { }

  public isOnMobile() {
    if (!this.deviceDetector.isDesktop()) {
      return true;
    }
    return false;
  }

}

interface Link {
  title: string;
  path: string;
  icon: string;
}
