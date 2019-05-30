import { Component, OnInit } from '@angular/core';
import { TipoCuenta } from 'src/app/Models/tipo-cuenta';
import { Cuenta } from 'src/app/Models/cuenta';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/Models/cliente';
import { ClienteService } from '../../../usuario-entidad/gestionarCliente/cliente.service';
import { CuentasService } from '../cuentas.service';
import { Moneda } from 'src/app/Models/moneda';

@Component({
  selector: 'app-apertura-de-cuenta',
  templateUrl: './apertura-de-cuenta.component.html',
  styleUrls: ['./apertura-de-cuenta.component.css']
})
export class AperturaDeCuentaComponent implements OnInit {

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private clienteService: ClienteService, private cuentasService: CuentasService) { }
  cuenta: Cuenta = new Cuenta();
 tipoCuentas: Array<TipoCuenta>;
 tipoCuentaSeleccionado: number;
 monedas: Array<Moneda>;
 monedaSeleccionada: number;
 cliente: Cliente = new Cliente();
 idCliente: string;
 actualizar: boolean;
 disableIdCliente: boolean;
 ngOnInit() {
   // console.log(this.getNroCuentaRandom())
   this.cuenta.nroCuenta = this.getNroCuentaRandom();
   this.idCliente = this.activatedRoute.snapshot.paramMap.get('idCliente');
   console.log(this.idCliente);
   if (this.idCliente) {
      this.clienteService.getCliente(Number(this.idCliente)).subscribe(value => {
        this.cliente = value;
      });
      this.disableIdCliente = true;
    } else {
      this.disableIdCliente = false;
    }
// tslint:disable-next-line: no-conditional-assignment
   if (this.idCliente = this.activatedRoute.snapshot.paramMap.get('actualizar')) {
      this.actualizar = true;
    } else {
      this.actualizar = false;
    }

   this.cuentasService.getTiposDeCuenta().subscribe(values => {
      this.tipoCuentas = values;
    });
   this.cuentasService.getMonedas().subscribe(values => {
      this.monedas = values;
    });

  }


  getNroCuentaRandom(): string {
 return   String(this.getRandomNumber(3)) + String(this.getRandomNumber(2)) + String(this.getRandomNumber(4));
  }

  getNroCuentaRandomNumber(): number {
    const nroCuenta = this.getNroCuentaRandom();
    console.log(nroCuenta);
    return   Number(nroCuenta);
  }
  getRandomNumber(cant: number) {

 return Math.floor(1 * (Math.pow(10, cant - 1)) + Math.random() * 9 * (Math.pow(10, cant - 1)));


  }


  RegistrarCuenta() {
    this.cuenta.idMoneda = this.monedaSeleccionada;
    this.cuenta.idTipoCuenta = this.tipoCuentaSeleccionado;
    this.cuenta.idcliente = this.cliente.id;
    this.cuentasService.addCuenta(this.cuenta).then((val) => {
      console.log(val);
      console.log('cuenta añadida correctamente');
      this.route.navigateByUrl('/UsuarioEntidad/detalleCliente/'+ this.cliente.id);
    });
  }

}
