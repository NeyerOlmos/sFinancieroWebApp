import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovimientoDeCuentaRoutingModule } from './movimiento-de-cuenta-routing.module';
import { AperturaDeCuentaComponent } from './gestionarCuenta/apertura-de-cuenta/apertura-de-cuenta.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CuentaComponent } from './gestionarCuenta/cuenta/cuenta.component';
import { CuentasComponent } from './gestionarCuenta/cuentas/cuentas.component';
import { MovimientosComponent } from './gestionarMovimientos/movimientos/movimientos.component';
import { MonedasComponent } from './gestionarMoneda/monedas/monedas.component';
import { AddMonedaComponent } from './gestionarMoneda/add-moneda/add-moneda.component';
import { RealizarDepositoComponent } from './gestionarMovimientos/realizar-deposito/realizar-deposito.component';
import { ChequerasComponent } from './gestionarChequera/chequeras/chequeras.component';
import { RegistrarChequeraComponent } from './gestionarChequera/registrar-chequera/registrar-chequera.component';
import { HabilitarTarjetaComponent } from './gestionarTarjeta/habilitar-tarjeta/habilitar-tarjeta.component';
import { AsignarTarjetaComponent } from './gestionarTarjeta/asignar-tarjeta/asignar-tarjeta.component';
import { RegistrarTipoDeTarjetaComponent } from './gestionarTarjeta/registrar-tipo-de-tarjeta/registrar-tipo-de-tarjeta.component';
import { RealizarTransferenciaComponent } from './gestionarMovimientos/realizar-transferencia/realizar-transferencia.component';
import { RealizarRetiroComponent } from './gestionarMovimientos/realizar-retiro/realizar-retiro.component';
import { ReporteDeMovimientosComponent } from './gestionarCuenta/reporte-de-movimientos/reporte-de-movimientos.component';


@NgModule({
// tslint:disable-next-line: max-line-length
  declarations: [ AperturaDeCuentaComponent, CuentaComponent, CuentasComponent, MovimientosComponent, MonedasComponent, AddMonedaComponent, RealizarDepositoComponent, ChequerasComponent, RegistrarChequeraComponent, HabilitarTarjetaComponent, AsignarTarjetaComponent, RegistrarTipoDeTarjetaComponent, RealizarTransferenciaComponent, RealizarRetiroComponent, ReporteDeMovimientosComponent],
  imports: [
    CommonModule,
    MovimientoDeCuentaRoutingModule,
    SharedModule
    ,
    FormsModule
  ]
})
export class MovimientoDeCuentaModule { }
