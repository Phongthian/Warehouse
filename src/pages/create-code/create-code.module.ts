import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateCodePage } from './create-code';

@NgModule({
  declarations: [
    CreateCodePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateCodePage),
  ],
})
export class CreateCodePageModule {}
