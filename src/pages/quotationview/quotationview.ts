import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the QuotationviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotationview',
  templateUrl: 'quotationview.html',
})
export class QuotationviewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotationviewPage');
  }
  ionViewWillEnter(){
    this.viewCtrl.showBackButton(false);
  }
  goBack(){
    this.navCtrl.push(HomePage);
  
  }

}
