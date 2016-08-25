import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { UserPage } from '../../pages/user/user';
import { UserService } from '../../providers/user-service';

@Component({
  templateUrl: 'build/pages/users/users.html',
  providers: [UserService]
})
export class UsersPage {
  private users: any;

  constructor(private userService: UserService, private nav: NavController, private loading: LoadingController) {
    this.users = [];
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    let loading = this.loading.create({});
    loading.present().then(() => {
      this.userService.getAll()
        .then(users => {
          this.users = users;
          loading.dismiss();
        }, (error) => {
          this.users = [];
          loading.dismiss();
        });
    });
  }

  showUser(id) {
    this.nav.push(UserPage, { id: id });
  }
}
