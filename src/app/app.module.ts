import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NgxQRCodeModule } from 'ngx-qrcode2'; 
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { MenuPage } from '../pages/menu/menu';
import { AddDataPage } from '../pages/add-data/add-data';
import { CreateCodePage } from '../pages/create-code/create-code';
import { ShowDataPage } from '../pages/show-data/show-data';
import { OutDataPage } from '../pages/out-data/out-data';
import { ShowListdataPage } from '../pages/show-listdata/show-listdata';
import { ShowListoutPage } from '../pages/show-listout/show-listout';
import { StatisticsPage } from '../pages/statistics/statistics';
import { TableDataAddPage } from '../pages/table-data-add/table-data-add';
import { TableDataOutPage } from '../pages/table-data-out/table-data-out';
import { NotificationPage } from '../pages/notification/notification';

// firebaase config
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCnFJPaVV8Evbuc_niIvB6DxprQ8LLTws0",
  authDomain: "warehouse-da413.firebaseapp.com",
  databaseURL: "https://warehouse-da413.firebaseio.com",
  projectId: "warehouse-da413",
  storageBucket: "warehouse-da413.appspot.com",
  messagingSenderId: "812872692077"
};

@NgModule({
  declarations: [
    MyApp,
    MenuPage,
    AddDataPage,
    CreateCodePage,
    ShowDataPage,
    OutDataPage,
    ShowListdataPage,
    ShowListoutPage,
    StatisticsPage,
    TableDataAddPage,
    TableDataOutPage,
    NotificationPage
  ],

  imports: [
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    NgxQRCodeModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    AddDataPage,
    CreateCodePage,
    ShowDataPage,
    OutDataPage,
    ShowListdataPage,
    ShowListoutPage,
    StatisticsPage,
    TableDataAddPage,
    TableDataOutPage,
    NotificationPage
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner
  ]
})
export class AppModule {}

