import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Constants } from '../constants';

@Injectable()
export class UserService {
  user: any;
  users: any;

  constructor(private http: Http) {
    this.user = null;
    this.users = null;
  }

  get(id) {
    if (this.user) {
      return Promise.resolve(this.user);
    }

    let url = `${Constants.API_ENDPOINT}users/${id}`;

    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(user => {
          this.user = user;
          resolve(this.user);
        });
    });
  }

  getAlbums(user_id) {
    let url = `${Constants.API_ENDPOINT}albums?userId=${user_id}`;

    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(albums => {
          resolve(albums);
        });
    });
  }

  getAll() {
    if (this.users) {
      return Promise.resolve(this.users);
    }

    var url = `${Constants.API_ENDPOINT}users`;

    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(users => {
          this.users = users;
          resolve(this.users);
        });
    });
  }
}
