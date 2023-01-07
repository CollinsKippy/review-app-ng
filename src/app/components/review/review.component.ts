import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Review } from 'src/app/interfaces/Review';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  @Input() review: Review | undefined;
}
