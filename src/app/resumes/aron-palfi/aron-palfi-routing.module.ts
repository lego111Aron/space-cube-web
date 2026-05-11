import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AronPalfiComponent } from './aron-palfi.component';

const routes: Routes = [
  {
    path: '',
    component: AronPalfiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AronPalfiRoutingModule { }
