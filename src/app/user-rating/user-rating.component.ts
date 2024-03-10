import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-user-rating',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './user-rating.component.html',
  styleUrl: './user-rating.component.scss'
})
export class UserRatingComponent {

}
