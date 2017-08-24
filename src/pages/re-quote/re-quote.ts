import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { BillPage } from '../bill/bill';

/**
 * Generated class for the ReQuotePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-re-quote',
  templateUrl: 're-quote.html',
})
export class ReQuotePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReQuotePage');
  }
  ionViewWillEnter(){
    this.viewCtrl.showBackButton(false);
  }

  goBack(){
    this.navCtrl.push(BillPage);
  }


}
