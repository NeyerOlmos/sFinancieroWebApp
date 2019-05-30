import { Component, OnInit } from '@angular/core';
import { Moneda } from 'src/app/Models/moneda';
import { CuentasService } from '../../gestionarCuenta/cuentas.service';
import { MovimientoDeCuentaService } from '../../movimiento-de-cuenta.service';
import { Cuenta } from 'src/app/Models/cuenta';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-realizar-transferencia',
  templateUrl: './realizar-transferencia.component.html',
  styleUrls: ['./realizar-transferencia.component.css']
})
export class RealizarTransferenciaComponent implements OnInit {
  
  monto: number;
  monedas: Array<Moneda>;
  cuentas: Array<Cuenta>;
 monedaSeleccionada: number;
 cuentaOrigen: number;
 cuentaDestino: number;
 descripcion: string;
 ubicacion: string;
 oficina: string;
 id:string;
  constructor(private cuentasService: CuentasService, private movimientosService: MovimientoDeCuentaService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get("idCliente");

    this.cuentasService.getMonedas().subscribe(values => {
      this.monedas = values;
    });
    if(this.id!=null){

      this.cuentasService.getCuentasByClienteId(this.id).subscribe(values=>{
        this.cuentas=values;
      })
    }
  }
  Transferir() {
    this.movimientosService.Transferir(this.cuentaOrigen, this.cuentaDestino, this.monto, this.descripcion, this.oficina, this.ubicacion).then(val => {
      console.log('transferencia con exito');
    }).catch(e => {
      console.log(e.error);
    });
}
}
