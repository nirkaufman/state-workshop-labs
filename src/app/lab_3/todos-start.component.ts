import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-todos-start',
  standalone: true,
  imports: [CommonModule],
  template: `
      <section class="todoapp">

          <header class="header">
              <h1>todos</h1>
              <input class="new-todo"
                     placeholder="What needs to be done?"
                     autofocus />
          </header>

          <section class="main">
              <input class="toggle-all"
                     type="checkbox" />
              <ul class="todo-list">
                  <li>
                      <div class="view">
                          <input class="toggle"
                                 type="checkbox" />
                          <label>Todo Title</label>
                          <button class="destroy"></button>
                      </div>
                      <input class="edit" />
                  </li>
              </ul>
          </section>

          <footer class="footer">
              <span class="todo-count"><strong>0</strong> items left</span>
              <button class="clear-completed">Clear completed
              </button>
          </footer>

      </section>
  `,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['todos-start.component.css']
})
export class TodosStartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
