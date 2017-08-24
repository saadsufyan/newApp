import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JoborderPage } from './joborder';

@NgModule({
  declarations: [
    JoborderPage,
  ],
  imports: [
    IonicPageModule.forChild(JoborderPage),
  ],
})
export class JoborderPageModule {}
