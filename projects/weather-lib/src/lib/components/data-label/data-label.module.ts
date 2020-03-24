import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DataLabelComponent } from './data-label.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DataLabelComponent
  ],
  exports: [
    DataLabelComponent
  ]
})
export class DataLabelModule {}
