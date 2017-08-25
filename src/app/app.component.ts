import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { LanguagePage } from '../pages/language/language';
import { JoborderPage } from '../pages/joborder/joborder';
import { AssignedjobPage } from '../pages/assignedjob/assignedjob';
import { ClaimjobPage } from '../pages/claimjob/claimjob';
import { JoborderdetailsPage } from '../pages/joborderdetails/joborderdetails';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LanguagePage;
  ActivePage: any

  pages: Array<{title: string, component: any, class: string, img:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Job Order', component: HomePage, class: 'class1' , img: 'assets/job_icon@2x-2.png' },
      { title: 'Assigned Jobs', component: AssignedjobPage, class: 'class2'  , img: 'assets/user@2x-2.png'},
      { title: 'Claim Jobs', component: ClaimjobPage, class: 'class3'  , img: 'assets/claim@2x-2.png'}
    ];

    this.ActivePage = this.pages[0];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.ActivePage = page;
  }
  
  checkActive(page){
    return page == this.ActivePage ;
  }
}
