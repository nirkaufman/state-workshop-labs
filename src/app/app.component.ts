import { Component } from '@angular/core';
import {SyncStartComponent} from "./lab_2/sync-start.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SyncStartComponent],
  template: `
    <div class="container">
        <h1>Sate Management Workshop</h1>
        <app-sync-start></app-sync-start>
    </div>
  `,
})
export class AppComponent {}
