import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AronPalfiRoutingModule } from './aron-palfi-routing.module';
import { AronPalfiComponent } from './aron-palfi.component';

@NgModule({
  imports: [
    CommonModule,
    AronPalfiRoutingModule,
    AronPalfiComponent
  ]
})
export class AronPalfiModule { }
