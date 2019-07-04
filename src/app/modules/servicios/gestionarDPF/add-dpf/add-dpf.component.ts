import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { Dpf } from 'src/app/Models/dpf';
import { Moneda } from 'src/app/Models/moneda';
import { CuentasService } from 'src/app/modules/movimiento-de-cuenta/gestionarCuenta/cuentas.service';

@Component({
  selector: 'app-add-dpf',
  templateUrl: './add-dpf.component.html',
  styleUrls: ['./add-dpf.component.css']
})
export class AddDPFComponent 
extends BaseFormComponent
implements OnInit {
dpf:Dpf;
monedas:Array<Moneda>;
   monedaSeleccionada:number;
  constructor(private cuentasService:CuentasService) {
    super();
  }

  ngOnInit() {
    this.cuentasService.getMonedas().subscribe(values=>{
      this.monedas=values;
    })
    this.dpf = new Dpf();
  this.viewBlocked = false;
  }
  AddDPF(){}
}
