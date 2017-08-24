import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobCompletionPage } from './job-completion';

@NgModule({
  declarations: [
    JobCompletionPage,
  ],
  imports: [
    IonicPageModule.forChild(JobCompletionPage),
  ],
})
export class JobCompletionPageModule {}
