import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Kockulosroom2026nyarComponent } from './kockulosroom2026nyar.component';

const routes: Routes = [
  { path: '', component: Kockulosroom2026nyarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Kockulosroom2026nyarRoutingModule { }
