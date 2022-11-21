import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarAsistenciaPageRoutingModule } from './modificar-asistencia-routing.module';

import { ModificarAsistenciaPage } from './modificar-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarAsistenciaPageRoutingModule
  ],
  declarations: [ModificarAsistenciaPage]
})
export class ModificarAsistenciaPageModule {}
