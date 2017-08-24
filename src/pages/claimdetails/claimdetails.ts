import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ClaimjobPage } from '../claimjob/claimjob';

/**
 * Generated class for the ClaimdetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-claimdetails',
  templateUrl: 'claimdetails.html',
})
export class ClaimdetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClaimdetailsPage');
  }
  ionViewWillEnter(){
    this.viewCtrl.showBackButton(false);
  }

  goBack(){
    this.navCtrl.push(ClaimjobPage);
  }
}
