import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Kockulosroom2026nyarRoutingModule } from './kockulosroom2026nyar-routing.module';
import { Kockulosroom2026nyarComponent } from './kockulosroom2026nyar.component';
import { TranslatePipe } from '../../../../i18n/translate.pipe';

@NgModule({
  declarations: [
    Kockulosroom2026nyarComponent
  ],
  imports: [
    CommonModule,
    Kockulosroom2026nyarRoutingModule,
    TranslatePipe
  ]
})
export class Kockulosroom2026nyarModule { }
