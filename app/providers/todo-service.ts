import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Constants } from '../constants';

@Injectable()
export class TodoService {
  todo: any;
  todos: any;

  constructor(private http: Http) {
    this.todo = null;
    this.todos = null;
  }

  get(id) {
    if (this.todo) {
      return Promise.resolve(this.todo);
    }

    return new Promise(resolve => {
      var url = Constants.API_ENDPOINT + 'todos/'+id;
      this.http.get(url)
        .map(res => res.json())
        .subscribe(todo => {
          this.todo = todo;
          resolve(this.todo);
        });
    });
  }

  getAll() {
    if (this.todos) {
      return Promise.resolve(this.todos);
    }

    return new Promise(resolve => {
      var url = Constants.API_ENDPOINT + 'todos';
          console.log('url', url);
      this.http.get(url)
        .map(res => res.json())
        .subscribe(todos => {
          this.todos = todos;
          resolve(this.todos);
        });
    });
  }
}
