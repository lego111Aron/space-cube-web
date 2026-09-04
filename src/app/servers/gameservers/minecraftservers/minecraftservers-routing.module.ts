import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinecraftserversComponent } from './minecraftservers.component';

const routes: Routes = [
  { path: '', component: MinecraftserversComponent },
  {
    path: 'kockulosroom202526tel',
    loadChildren: () =>
      import('./kockulosroom202526tel/kockulosroom202526tel.module').then(m => m.Kockulosroom202526telModule)
  },
  {
    path: 'kockulosroom2026nyar',
    loadChildren: () =>
      import('./kockulosroom2026nyar/kockulosroom2026nyar.module').then(m => m.Kockulosroom2026nyarModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinecraftserversRoutingModule { }
