import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Review } from 'src/app/interfaces/Review';

interface ReviewForm {
  id: FormControl<number | undefined>;
  comment: FormControl<string>;
  rating: FormControl<number | null>;
}

@Component({
  selector: 'app-review-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss'],
})
export class ReviewFormComponent {
  @Output() formSubmitted = new EventEmitter<Review>();

  ratings: number[] = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

  reviewForm = new FormGroup<ReviewForm>({
    id: new FormControl(),
    comment: new FormControl('', {
      nonNullable: true,
      validators: [Validators.minLength(8), Validators.required],
      asyncValidators: [],
    }),
    rating: new FormControl(null, {
      nonNullable: true,
      validators: [Validators.required],
      asyncValidators: [],
    }),
  });

  formErrors: { controlName: string; controlErrors: string[] }[] = [];

  onSubmit() {
    if (this.reviewForm.invalid) {
      const formControlDetails: [string, FormControl][] = Object.entries(
        this.reviewForm.controls
      );
      console.log(formControlDetails);
      formControlDetails.forEach(([controlName, control]) => {
        if (control.errors) {
          const controlErrors = Object.keys(control.errors);

          this.formErrors.push({ controlName, controlErrors });
        }
      });

      return;
    }
    this.formErrors = [];

    const review = this.reviewForm.value as Review;
    review.id = Math.floor(Math.random() * 1000 + 1);
    this.formSubmitted.emit(review);

    this.reviewForm.reset();
  }

  // getters
  get comment() {
    return this.reviewForm.get('comment');
  }

  get rating() {
    return this.reviewForm.get('rating');
  }
}
