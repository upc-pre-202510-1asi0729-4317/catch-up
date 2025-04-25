import { Component } from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {LanguageSwitcherComponent} from './public/components/language-switcher/language-switcher.component';

@Component({
  selector: 'app-root',
  imports: [
    LanguageSwitcherComponent,
    TranslatePipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'catch-up';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.addLangs(['en', 'es']);
    translate.use('en');
  }

}
