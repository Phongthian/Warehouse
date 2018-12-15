import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-create-code',
  templateUrl: 'create-code.html',
})
export class CreateCodePage {

  createdData: null;
  createdCode: null;

  constructor (
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }
// Button Created new code
  created() {
    this.createdCode = this.createdData;
    console.log(this.createdCode);
  }

}

