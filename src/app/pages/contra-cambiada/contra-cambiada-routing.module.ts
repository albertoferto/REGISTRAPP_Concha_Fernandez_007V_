import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContraCambiadaPage } from './contra-cambiada.page';

const routes: Routes = [
  {
    path: '',
    component: ContraCambiadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContraCambiadaPageRoutingModule {}
