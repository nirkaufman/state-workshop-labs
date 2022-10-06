import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-start',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      post-start works!
    </p>
  `,
  styles: [
  ]
})
export class PostStartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
