import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContraCambiadaPageRoutingModule } from './contra-cambiada-routing.module';

import { ContraCambiadaPage } from './contra-cambiada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContraCambiadaPageRoutingModule
  ],
  declarations: [ContraCambiadaPage]
})
export class ContraCambiadaPageModule {}
