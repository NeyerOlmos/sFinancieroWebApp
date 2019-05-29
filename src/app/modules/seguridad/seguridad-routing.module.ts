import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BitacoraComponent } from './AdministrarBitacora/bitacora/bitacora.component';

const routes: Routes = [
  {path: "Bitacora" , component: BitacoraComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
