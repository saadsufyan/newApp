import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JoborderdetailsPage } from './joborderdetails';

@NgModule({
  declarations: [
    JoborderdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(JoborderdetailsPage),
  ],
})
export class JoborderdetailsPageModule {}
