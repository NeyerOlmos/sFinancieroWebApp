import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { BitacoraComponent } from './AdministrarBitacora/bitacora/bitacora.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [BitacoraComponent],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    SharedModule
  ]
})
export class SeguridadModule { }
