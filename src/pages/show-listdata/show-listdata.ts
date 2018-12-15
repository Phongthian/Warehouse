import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';
import { AddDataPage } from '../add-data/add-data';
import { TableDataAddPage } from '../table-data-add/table-data-add';


@Component({
  selector: 'page-show-listdata',
  templateUrl: 'show-listdata.html',
})
export class ShowListdataPage {
  firebase = []
  datas = { text:"", Date:"", ExpiredDate:"", NumberBox:"", NumberBottls:"" }

  constructor(
    public db: AngularFireDatabase,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {

      this.db.list("AddDataWarehouse").snapshotChanges().pipe(
        map(actions => 
          actions.map(a => ({ key: a.key, ...a.payload.val() }))
        )
      ).subscribe(datas => {
        this.firebase = datas
        console.log(this.firebase)
      });

      

  }

// Button add data new
  newAddData() {
    this.navCtrl.push(AddDataPage)
  }

// Button go to table data add
  goToTable() {
    this.navCtrl.push(TableDataAddPage)
  }
  
// Button delete
  delete(data) {
    this.db.list('/AddDataWarehouse/').remove(data)
      console.log(data);
  }

// funication calcular statistics

  


}
