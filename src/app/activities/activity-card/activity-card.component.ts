import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-activity-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './activity-card.component.html',
  styleUrl: './activity-card.component.scss'
})
export class ActivityCardComponent {
  @Input() size = "small";
  @Input() title = "";
  @Input() distance = 0.0;
  @Input() distanceUoM = "km";
  @Input() duration = 0;
  @Input() durationUoM = "min";
  @Input() weight = 0.0;
  @Input() weightUoM = "kg";
  @Input() showWeight = true;
  @Output() clicked = new EventEmitter<string>();

  onClick(title: string) {
    this.clicked.emit(title);
  }
}
