import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/components/photo-modal/photo-modal.html'
})
export class PhotoModal {
  private photo: any;

  constructor(private view: ViewController, private params: NavParams) {
    this.photo = this.params.get('photo');
  }

  ngOnInit() {
  }

  dismiss() {
    this.view.dismiss();
  }

}
