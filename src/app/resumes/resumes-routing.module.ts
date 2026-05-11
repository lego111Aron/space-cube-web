import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'aron-palfi',
    loadChildren: () =>
      import('./aron-palfi/aron-palfi.module').then(m => m.AronPalfiModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumesRoutingModule { }
