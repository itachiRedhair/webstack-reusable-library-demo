import { Component } from '@angular/core';
import { ThemeService } from '../../projects/ws-library/src/public_api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private themeService: ThemeService) {}

  onThemeChange(newTheme) {
    this.themeService.changeTheme(newTheme);
  }
}
