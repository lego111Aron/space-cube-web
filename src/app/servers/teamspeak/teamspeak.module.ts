import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamspeakRoutingModule } from './teamspeak-routing.module';
import { TeamspeakComponent } from './teamspeak.component';
import { TranslatePipe } from '../../i18n/translate.pipe';

@NgModule({
  declarations: [
    TeamspeakComponent
  ],
  imports: [
    CommonModule,
    TeamspeakRoutingModule,
    TranslatePipe
  ]
})
export class TeamspeakModule { }
