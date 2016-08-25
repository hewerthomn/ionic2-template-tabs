import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Constants } from '../constants';

@Injectable()
export class AlbumService {
  album: any;
  albums: any;

  constructor(private http: Http) {
    this.album = null;
    this.albums = null;
  }

  get(id) {
    if (this.album) {
      return Promise.resolve(this.album);
    }

    return new Promise(resolve => {
      let url = `${Constants.API_ENDPOINT}albums/${id}`;

      this.http.get(url)
        .map(res => res.json())
        .subscribe(album => {
          this.album = album;
          resolve(this.album);
        });
    });
  }

  getAll() {
    if (this.albums) {
      return Promise.resolve(this.albums);
    }

    var url = `${Constants.API_ENDPOINT}albums`;

    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(albums => {
          this.albums = albums;
          resolve(this.albums);
        });
    });
  }
}
