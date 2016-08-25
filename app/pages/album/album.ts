import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';

import { PhotoModal } from '../../components/photo-modal/photo-modal';
import { PhotoService } from '../../providers/photo-service';

@Component({
  templateUrl: 'build/pages/album/album.html',
  providers: [PhotoService]
})
export class AlbumPage {
  private user: any;
  private album: any;
  private photos: any;

  constructor(private photoService: PhotoService, private nav: NavController, private params: NavParams, private loading: LoadingController,
    private modal: ModalController) {
    this.user = this.params.get('user');
    this.album = this.params.get('album');
    this.photos = [];
  }

  ngOnInit() {
    this.loadPhotos();
  }

  loadPhotos() {
    let loading = this.loading.create({});
    loading.present().then(() => {
      this.photoService.getAll(this.album.id)
        .then(photos => {
          loading.dismiss();
          this.photos = photos;
        }, (error) => {
          loading.dismiss();
          this.photos = [];
        });
    });
  }

  showPhoto(photo) {
    let modal = this.modal.create(PhotoModal, { photo: photo });
    modal.present();
  }
}
