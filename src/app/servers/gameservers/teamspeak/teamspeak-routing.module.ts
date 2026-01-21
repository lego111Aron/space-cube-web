import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamspeakComponent } from './teamspeak.component';

const routes: Routes = [
  { path: '', component: TeamspeakComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamspeakRoutingModule {}
