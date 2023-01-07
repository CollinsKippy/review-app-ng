import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss'],
})
export class ReviewFormComponent {
  reviewForm: FormGroup = new FormGroup({
    id: new FormControl(),
    comment: new FormControl(''),
    rating: new FormControl(),
  });

  ratings: number[] = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
}
