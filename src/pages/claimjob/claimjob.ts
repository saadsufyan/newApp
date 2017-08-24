import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ClaimdetailsPage } from '../claimdetails/claimdetails';

/**
 * Generated class for the ClaimjobPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-claimjob',
  templateUrl: 'claimjob.html',
})
export class ClaimjobPage {

  claimJobs: string = "current";

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClaimjobPage');
  }

  ionViewWillEnter(){
    this.viewCtrl.showBackButton(false);
  }


  goToClaimDetails(){
    this.navCtrl.push(ClaimdetailsPage);
  }

}
