import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { AddDPFComponent } from './gestionarDPF/add-dpf/add-dpf.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddDPFComponent],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ServiciosModule { }
