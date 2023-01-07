import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { ReviewComponent } from './components/review/review.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { ReviewListComponent } from './components/review-list/review-list.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent],
  imports: [
    HeaderComponent,
    ReviewFormComponent,
    ReviewListComponent,

    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
