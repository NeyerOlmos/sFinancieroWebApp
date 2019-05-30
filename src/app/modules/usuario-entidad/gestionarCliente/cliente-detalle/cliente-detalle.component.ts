import { Component, OnInit, Input } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from 'src/app/Models/cliente';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { Cuenta } from 'src/app/Models/cuenta';
import { CuentasService } from 'src/app/modules/movimiento-de-cuenta/gestionarCuenta/cuentas.service';

@Component({
  selector: 'app-cliente-detalle',
  templateUrl: './cliente-detalle.component.html',
  styleUrls: ['./cliente-detalle.component.css']
})
export class ClienteDetalleComponent implements OnInit {

   id:string;
  cliente:Cliente;
  cuentas:Cuenta[];
  constructor(private clienteService:ClienteService,private cuentasService: CuentasService ,private route:ActivatedRoute) { }
  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get("id");
    console.log(this.id);
    this.fetchData();
    setInterval(()=>{
      this.fetchData();
    },1000)
    console.log(this.cliente)
  }
  fetchData(){
    this.clienteService.getCliente(+this.id).subscribe(value=>{
      this.cliente=value;
      this.cuentasService.getCuentasByClienteId(this.cliente.id.toString()).subscribe(values=>{
        this.cuentas=values;
      })
      console.log(value);
    })
  }
}
