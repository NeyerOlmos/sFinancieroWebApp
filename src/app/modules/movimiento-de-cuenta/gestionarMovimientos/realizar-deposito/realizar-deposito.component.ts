import { Component, OnInit } from '@angular/core';
import { Moneda } from 'src/app/Models/moneda';
import { CuentasService } from '../../gestionarCuenta/cuentas.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-realizar-deposito',
  templateUrl: './realizar-deposito.component.html',
  styleUrls: ['./realizar-deposito.component.css']
})
export class RealizarDepositoComponent implements OnInit {
nroCuenta:string;
monto:number;
monedas:Array<Moneda>;
 monedaSeleccionada:number;
  constructor(private cuentasService:CuentasService,private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.cuentasService.getMonedas().subscribe(values=>{
      this.monedas=values;
    })
  }

  Depositar(){

    this.cuentasService.getCuentaByNroCuenta(this.nroCuenta).subscribe(value=>{
       
          value.saldo= value.saldo + +this.monto; 
          this.cuentasService.updateCuenta(value,value.id).then(result=>{
            console.log("deposito exitoso");
            console.log(result);
            this.snackBar.open("Deposito exitoso","gracias",{duration:3000});
          })
    })
  }
}
