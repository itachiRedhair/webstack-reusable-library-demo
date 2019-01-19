import { Component, OnInit, Input } from '@angular/core';
import { ThemeService } from '../services/theme/theme.service';

@Component({
  selector: 'ws-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  @Input()
  checkedStars = 0;

  theme: string;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.theme.subscribe(newTheme => {
      this.theme = newTheme;
    });
  }
}
