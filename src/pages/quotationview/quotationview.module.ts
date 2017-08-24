import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuotationviewPage } from './quotationview';

@NgModule({
  declarations: [
    QuotationviewPage,
  ],
  imports: [
    IonicPageModule.forChild(QuotationviewPage),
  ],
})
export class QuotationviewPageModule {}
