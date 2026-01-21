import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServersComponent } from './servers.component';

const routes: Routes = [
  { path: '', component: ServersComponent },
  {
    path: 'gameservers',
    loadChildren: () =>
      import('./gameservers/gameservers.module').then(m => m.GameserversModule)
  },
  {
    path: 'teamspeak',
    loadChildren: () =>
      import('./teamspeak/teamspeak.module').then(m => m.TeamspeakModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServersRoutingModule {}
