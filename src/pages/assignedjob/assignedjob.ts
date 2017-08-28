import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { BillPage } from '../bill/bill';
import { ReQuotePage } from '../re-quote/re-quote';
import { QuotationviewPage } from '../quotationview/quotationview';
import { ViewjobPage } from '../viewjob/viewjob';


/**
 * Generated class for the AssignedjobPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assignedjob',
  templateUrl: 'assignedjob.html',
})
export class AssignedjobPage {
  
  assignedJobs: string = "current";

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssignedjobPage');
  }
  ionViewWillEnter(){
    this.viewCtrl.showBackButton(false);
  }

  goToBill(){
    this.navCtrl.push(BillPage);

  }
  goToReQuote(){
    this.navCtrl.push(QuotationviewPage);
  }
  goToViewJob(){
    this.navCtrl.push(ViewjobPage);
  }

}
