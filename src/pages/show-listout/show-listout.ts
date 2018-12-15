import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';
import { OutDataPage } from '../out-data/out-data';
import { TableDataOutPage } from '../table-data-out/table-data-out';


@IonicPage()
@Component({
  selector: 'page-show-listout',
  templateUrl: 'show-listout.html',
})
export class ShowListoutPage {
  firebase = []
  datas = { text:"", Date:"", NumberBottls:"" }

  constructor(
    public db: AngularFireDatabase,
    public navCtrl: NavController,
    public navParams: NavParams) {

      this.db.list("OutDataWarehouse").snapshotChanges().pipe(
        map(actions => 
          actions.map(a => ({ key: a.key, ...a.payload.val() }))
        )
      ).subscribe(datas => {
        this.firebase = datas
        console.log(this.firebase)

      });

  }

  // Button add data new
  newOutData() {
    this.navCtrl.push(OutDataPage)
  }

  goToTable() {
    this.navCtrl.push(TableDataOutPage)
  }
  
// Button delete
  delete(data) {
    this.db.list('/OutDataWarehouse/').remove(data)
      console.log(data);
  }

  

}
