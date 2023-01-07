import { Component } from '@angular/core';
import { Review } from '../interfaces/Review';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  reviews: Review[] = [
    { id: 1, comment: 'My Comment goes here', rating: 9 },
    { id: 2, comment: 'My Comment goes here', rating: 8 },
    { id: 3, comment: 'My Comment goes here', rating: 6.5 },
    { id: 4, comment: 'My Comment goes here', rating: 7.5 },
  ];

  onFormSubmitted(newReview: Review) {
    this.reviews = [newReview, ...this.reviews];
  }
}
