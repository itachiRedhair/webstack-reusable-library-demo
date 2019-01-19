import { NgModule } from '@angular/core';
import { WsLibraryComponent } from './ws-library.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [WsLibraryComponent, StarRatingComponent],
  imports: [BrowserModule, AngularFontAwesomeModule],
  exports: [WsLibraryComponent, StarRatingComponent]
})
export class WsLibraryModule {}
