import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { JoborderdetailsPage } from '../joborderdetails/joborderdetails';

/**
 * Generated class for the QuotationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotation',
  templateUrl: 'quotation.html',
})
export class QuotationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotationPage');
  }

  ionViewWillEnter(){
    this.viewCtrl.showBackButton(false);
  }
  goBack(){
    this.navCtrl.push(JoborderdetailsPage);
  
  }
}
