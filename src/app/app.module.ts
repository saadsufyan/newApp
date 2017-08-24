import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { LanguagePage } from '../pages/language/language';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { JoborderPage } from '../pages/joborder/joborder';
import { JoborderdetailsPage } from '../pages/joborderdetails/joborderdetails';
import { QuotationPage } from '../pages/quotation/quotation';
import { QuotationviewPage } from '../pages/quotationview/quotationview';
import { AssignedjobPage } from '../pages/assignedjob/assignedjob';
import { ClaimjobPage } from '../pages/claimjob/claimjob';
import { ClaimdetailsPage } from '../pages/claimdetails/claimdetails';
import { BillPage } from '../pages/bill/bill';
import { ReQuotePage } from '../pages/re-quote/re-quote';
import { JobCompletionPage } from '../pages/job-completion/job-completion';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LanguagePage,
    LoginPage,
    ListPage,
    JoborderPage,
    JoborderdetailsPage,
    QuotationPage,
    QuotationviewPage,
    AssignedjobPage,
    ClaimjobPage,
    ClaimdetailsPage,
    BillPage,
    ReQuotePage,
    JobCompletionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LanguagePage,
    LoginPage,
    ListPage,
    JoborderPage,
    JoborderdetailsPage,
    QuotationPage,
    QuotationviewPage,
    AssignedjobPage,
    ClaimjobPage,
    ClaimdetailsPage,
    BillPage,
    ReQuotePage,
    JobCompletionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
