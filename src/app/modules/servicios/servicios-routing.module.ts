import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDPFComponent } from './gestionarDPF/add-dpf/add-dpf.component';

const routes: Routes = [{
path:'AddDPF',component:AddDPFComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
