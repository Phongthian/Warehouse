import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'page-table-data-add',
  templateUrl: 'table-data-add.html',
})
export class TableDataAddPage {

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

// click delete data table
  delete(data) {
    this.db.list('/AddDataWarehouse/').remove(data)
      console.log(data);
  } 

  
}
