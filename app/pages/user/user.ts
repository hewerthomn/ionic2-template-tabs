import { Component } from '@angular/core';
import { DomSanitizationService } from '@angular/platform-browser';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { AlbumPage } from '../../pages/album/album';
import { UserService } from '../../providers/user-service';

@Component({
  templateUrl: 'build/pages/user/user.html',
  providers: [UserService]
})
export class UserPage {
  private user: any;
  private albums: any;
  private activeSegment: string = 'info';

  constructor(private userService: UserService, private nav: NavController, private params: NavParams, private loading: LoadingController, private sanitizer: DomSanitizationService) {
    this.user = null;
    this.albums = [];
  }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    let loading = this.loading.create({});
    loading.present().then(() => {
      this.userService.get(this.params.get('id'))
        .then(user => {
          this.user = user;
          loading.dismiss();
        }, (error) => {
          this.user = [];
          loading.dismiss();
        });

      this.userService.getAlbums(this.params.get('id'))
        .then(albums => {
          this.albums = albums;
        }, (error) => {
          this.albums = [];
        });
    });
  }

  showAlbum(album) {
    this.nav.push(AlbumPage, { user: this.user, album: album });
  }

  sanitize(url) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
