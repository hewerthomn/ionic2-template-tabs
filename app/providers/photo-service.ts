import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Constants } from '../constants';

@Injectable()
export class PhotoService {
  photo: any;
  photos: any;

  constructor(private http: Http) {
    this.photo = null;
    this.photos = null;
  }

  get(id) {
    if (this.photo) {
      return Promise.resolve(this.photo);
    }

    return new Promise(resolve => {
      let url = `${Constants.API_ENDPOINT}photos/${id}`;

      this.http.get(url)
        .map(res => res.json())
        .subscribe(photo => {
          this.photo = photo;
          resolve(this.photo);
        });
    });
  }

  getAll(albumId) {
    if (this.photos) {
      return Promise.resolve(this.photos);
    }

    let url = `${Constants.API_ENDPOINT}photos?albumId=${albumId}`;

    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(photos => {
          this.photos = photos;
          resolve(this.photos);
        });
    });
  }
}
