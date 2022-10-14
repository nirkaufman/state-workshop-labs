import {Component} from '@angular/core';
import {ListsPageStartComponent} from "./lab_4/lists-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListsPageStartComponent],
  template: `
    <div class="container">
        <h1 class="border-bottom py-1 mb-3">State Management Workshop</h1>
    </div>
  `,
})
export class AppComponent {}
