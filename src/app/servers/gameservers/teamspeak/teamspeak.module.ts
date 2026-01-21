import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamspeakRoutingModule } from './teamspeak-routing.module';
import { TeamspeakComponent } from './teamspeak.component';

@NgModule({
  declarations: [
    TeamspeakComponent
  ],
  imports: [
    CommonModule,
    TeamspeakRoutingModule
  ]
})
export class TeamspeakModule { }
