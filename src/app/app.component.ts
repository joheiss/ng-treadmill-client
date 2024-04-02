import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivitiesHomeComponent } from './activities/activities-home/activities-home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ActivitiesHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-treadmill-client';
}
