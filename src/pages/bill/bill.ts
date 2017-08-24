import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { AssignedjobPage } from '../assignedjob/assignedjob';
import { ReQuotePage } from '../re-quote/re-quote';
import { JobCompletionPage } from '../job-completion/job-completion';
/**
 * Generated class for the BillPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bill',
  templateUrl: 'bill.html',
})
export class BillPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BillPage');
  }
  goBack(){
    this.navCtrl.push(AssignedjobPage);
  }
  ionViewWillEnter(){
    this.viewCtrl.showBackButton(false);
  }

  goToReQuote(){
    this.navCtrl.push(ReQuotePage);
  }

  goToJobCompletion(){
    this.navCtrl.push(JobCompletionPage);
  }
}
