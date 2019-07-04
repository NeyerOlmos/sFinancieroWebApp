import { Component, OnInit } from '@angular/core';
import { Moneda } from 'src/app/Models/moneda';
import { CuentasService } from '../../gestionarCuenta/cuentas.service';
import { MatSnackBar } from '@angular/material';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { Retiro } from 'src/app/Models/retiro';
import { MovimientoDeCuentaService } from '../../movimiento-de-cuenta.service';

@Component({
  selector: 'app-realizar-retiro',
  templateUrl: './realizar-retiro.component.html',
  styleUrls: ['./realizar-retiro.component.css']
})
export class RealizarRetiroComponent 
extends BaseFormComponent
implements OnInit {
  nroCuenta:string;
  monto:number;
  monedas:Array<Moneda>;
   monedaSeleccionada:number;
  constructor(private cuentasService:CuentasService ,private movimientoDeCuentasService:MovimientoDeCuentaService,private snackBar: MatSnackBar) {
    super();
  }

  ngOnInit() {
    this.cuentasService.getMonedas().subscribe(values=>{
      this.monedas=values;
    })
  }
  Retirar(){
    this.blockView();
    this.cuentasService.getCuentaByNroCuenta(this.nroCuenta).subscribe(cuenta=>{
       if(cuenta.saldo >= +this.monto){
         this.movimientoDeCuentasService.Retirar({ cuenta, monto: this.monto }).then(()=>{
           this.unblockView();
           this.snackBar.open("Retiro exitoso", "Ok",{duration: 3000});
         })
        }else{
          this.unblockView();
          this.snackBar.open("Saldo Insuficiente", "Ok",{duration: 3000});
        }
    })
  }
}
