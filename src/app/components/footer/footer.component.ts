import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatToolbar,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [MatIconRegistry],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  instagramLink = 'https://www.instagram.com/more_paintball/';
  facebookLink = 'https://www.facebook.com/people/More-Paintball/61553086056125/'

  constructor(private iconService: MatIconRegistry, private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.iconService.addSvgIcon('instagram', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/instagram.svg'));
    this.iconService.addSvgIcon('facebook', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/facebook.svg'));
  }
}
