import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-show-data',
  templateUrl: 'show-data.html',
})
export class ShowDataPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) { }


}
