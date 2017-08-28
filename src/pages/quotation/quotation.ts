import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public alertCtrl: AlertController) {
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

presentPrompt() {
  let alert = this.alertCtrl.create({
    title: 'ADD QUOTE DETAIL',
    cssClass: 'promptcss',
    inputs: [
      {
        name: 'SERVICE:',
        placeholder: 'SERVICE'
      },
      {
        name: 'DESCRIPTION:',
        placeholder: 'DESCRIPTION'
      },
      {
        name: 'PRICE:',
        placeholder: 'PRICE'
      }
    ],
    buttons: [
      {
        text: 'ADD',
        role: 'cancel',
        handler: data => {
          console.log('Add clicked');
        }
      }
    ]
  });
  alert.present();
}
}
