import { Component } from '@angular/core';
import { ActivityCardComponent } from '../activity-card/activity-card.component';

@Component({
  selector: 'app-activity-cards',
  standalone: true,
  imports: [ActivityCardComponent],
  templateUrl: './activity-cards.component.html',
  styleUrl: './activity-cards.component.scss'
})
export class ActivityCardsComponent {

  public getTitle(): string {
    return "Today";
  }

  public getDistance(): number {
    return 456.54;
  }

  public getDuration(): number {
    return 48;
  }

  public getWeight(): number {
    return 77.8;
  }

  public onClick(title: string) {

  }
}
