import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from './../button/button.module';
import { CardComponent } from './card.component';

@NgModule({
  imports: [
    ButtonModule,
    CommonModule,
  ],
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule {}
