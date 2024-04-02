import { Component } from '@angular/core';
import { ActivityCardsComponent } from '../activity-cards/activity-cards.component';

@Component({
  selector: 'app-activities-home',
  standalone: true,
  imports: [ActivityCardsComponent],
  templateUrl: './activities-home.component.html',
  styleUrl: './activities-home.component.scss'
})
export class ActivitiesHomeComponent {

}
