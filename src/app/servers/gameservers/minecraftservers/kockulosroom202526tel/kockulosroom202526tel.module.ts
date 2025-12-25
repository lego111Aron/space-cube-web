import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Kockulosroom202526telRoutingModule } from './kockulosroom202526tel-routing.module';
import { Kockulosroom202526telComponent } from './kockulosroom202526tel.component';
import { TranslatePipe } from '../../../../i18n/translate.pipe';


@NgModule({
  declarations: [
    Kockulosroom202526telComponent
  ],
  imports: [
    CommonModule,
    Kockulosroom202526telRoutingModule,
    TranslatePipe
  ]
})
export class Kockulosroom202526telModule { }
