import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Review } from 'src/app/interfaces/Review';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-review-list',
  standalone: true,
  imports: [CommonModule, ReviewComponent],
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss'],
})
export class ReviewListComponent {
  @Input() reviews: Review[] | undefined;
}
