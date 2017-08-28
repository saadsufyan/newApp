import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,  public alertCtrl: AlertController) {
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
