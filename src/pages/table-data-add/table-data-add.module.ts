import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TableDataAddPage } from './table-data-add';

@NgModule({
  declarations: [
    TableDataAddPage,
  ],
  imports: [
    IonicPageModule.forChild(TableDataAddPage),
  ],
})
export class TableDataAddPageModule {}
