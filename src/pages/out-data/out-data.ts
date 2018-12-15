import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShowListoutPage } from '../show-listout/show-listout';


@Component({
  selector: 'page-out-data',
  templateUrl: 'out-data.html',
})
export class OutDataPage {
  public scanData = [];
  public option: BarcodeScannerOptions;
  public test: any;

  public firebase = []
  public datas = { text:"", Date:"", NumberBottls:"" }

  constructor(
    public db: AngularFireDatabase,
    private barcodeScanner: BarcodeScanner,
    public navCtrl: NavController, 
    public navParams: NavParams) {

      this.db.list("OutData-Warehouse").snapshotChanges().pipe(
        map(actions => 
          actions.map(a => ({ key: a.key, ...a.payload.val() }))
        )
      ).subscribe(datas => {
        this.firebase = datas
        console.log(this.firebase)
      });

  }
  
// function scan QR code data out
  scanQR() {
    this.option = {
      disableAnimations: true,
      showFlipCameraButton: true,
      prompt: "Pleas Scan Your Code"
    }
    this.barcodeScanner.scan(this.option).then(barcodeData => {
      this.test = barcodeData.text
      console.log('Barcode data', barcodeData);
    
     }).catch(err => {
        console.log('Error', err);
     });
  }

// function save data to firebase
  saveFirebase(datas) {
    let scanData = {
      text: this.test,
      Date: this.datas.Date,
      NumberBottls: this.datas.NumberBottls
    } 
    this.db.list("/OutDataWarehouse/").push(scanData);
      console.log(this.test)

    this.navCtrl.push(ShowListoutPage)
  }


  
}