import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CreateCodePage } from '../create-code/create-code';
import { ShowDataPage } from '../show-data/show-data';
import { ShowListdataPage } from '../show-listdata/show-listdata';
import { ShowListoutPage } from '../show-listout/show-listout';
import { StatisticsPage } from '../statistics/statistics';
import { NotificationPage } from '../notification/notification';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor (
    public navCtrl: NavController, 
    public navParams: NavParams
  ) { }
    
// Go to pages createcode
  createCode() {
    this.navCtrl.push(CreateCodePage)
  }

// Go to pages add data
  showListdata() {
    this.navCtrl.push(ShowListdataPage)
  }

// Go to pages out data 
showListOutData() {
    this.navCtrl.push(ShowListoutPage)
  }

// Go to pages show data
  showData() {
    this.navCtrl.push(ShowDataPage)
  }
  
// Go to pages statistics
  goStatistics() {
    this.navCtrl.push(StatisticsPage)
  }
// Go to pages
  goNotification() {
    this.navCtrl.push(NotificationPage)
  }

}
