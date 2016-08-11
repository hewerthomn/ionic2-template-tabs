import {Component} from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';

import {TodoService} from '../../providers/todo-service';

@Component({
  templateUrl: 'build/pages/todo/todo.html',
  providers: [TodoService]
})
export class TodoPage {
  todoService: TodoService

  todos: any;

  static get parameters() {
    return [TodoService];
  }
  constructor(todoService) {
    this.todoService = todoService;

    this.todos = [];
  }

  ngOnInit() {
    this.loadTodoItems();
  }

  loadTodoItems() {
    this.todoService.getAll()
      .then(todos => {
        this.todos = todos;
      }, (error) => {
        this.todos = null;
      });
  }
}
