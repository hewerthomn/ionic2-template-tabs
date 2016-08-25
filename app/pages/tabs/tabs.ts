import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { UsersPage } from '../users/users';
import { AboutPage } from '../about/about';

@Component({
  template: `
    <ion-tabs selectedIndex="1" tabsLayout="icon-left" tabsHighlight="true">
    <ion-tab [root]="tab2Root" tabTitle="Users" tabIcon="people"></ion-tab>
    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>
    <ion-tab [root]="tab3Root" tabTitle="About" tabIcon="information-circle"></ion-tab>
  </ion-tabs>
  `
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  constructor() {
    this.tab1Root = HomePage;
    this.tab2Root = UsersPage;
    this.tab3Root = AboutPage;
  }
}
