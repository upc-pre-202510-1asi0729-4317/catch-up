import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'catch-up';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.addLangs(['en', 'es']);
    translate.use('es');
  }

}
