import { Component } from '@angular/core';

@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [
    MapsComponent
  ],
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.scss'
})
export class MapsComponent {
  public maps: PaintballMap[] = [
    {
      name: 'Lost Forest',
      image: 'assets/lost-forest.jpeg',
      description: 'Klassisk skogsbana i kuperad terräng och gott om gömställen!'
    },
    {
      name: 'Speedball',
      image: 'assets/speed-ball.jpeg',
      description: 'Old school speedball med högt tempo och snabba matcher.'
    },
    {
      name: 'Ghost Town',
      image: 'assets/ghost-town.jpeg',
      description: 'En bana i urban miljö med containrar och fordon. Föreställ er en öde by med gott om gömställen och skottgluggar!'
    }
  ];

}

export interface PaintballMap {
  name: string;
  image: string;
  description: string;
}
