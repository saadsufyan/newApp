import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { BillPage } from '../bill/bill';

/**
 * Generated class for the JobCompletionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-completion',
  templateUrl: 'job-completion.html',
})
export class JobCompletionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobCompletionPage');
  }
  ionViewWillEnter(){
    this.viewCtrl.showBackButton(false);
  }

  goBack(){
    this.navCtrl.push(BillPage);
  }

}
