import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AperturaDeCuentaComponent } from './gestionarCuenta/apertura-de-cuenta/apertura-de-cuenta.component';
import { CuentasComponent } from './gestionarCuenta/cuentas/cuentas.component';
import { MovimientosComponent } from './gestionarMovimientos/movimientos/movimientos.component';
import { MonedasComponent } from './gestionarMoneda/monedas/monedas.component';
import { AddMonedaComponent } from './gestionarMoneda/add-moneda/add-moneda.component';
import { RealizarDepositoComponent } from './gestionarMovimientos/realizar-deposito/realizar-deposito.component';
import { RegistrarChequeraComponent } from './gestionarChequera/registrar-chequera/registrar-chequera.component';
import { ChequerasComponent } from './gestionarChequera/chequeras/chequeras.component';
import { HabilitarTarjetaComponent } from './gestionarTarjeta/habilitar-tarjeta/habilitar-tarjeta.component';
import { RegistrarTipoDeTarjetaComponent } from './gestionarTarjeta/registrar-tipo-de-tarjeta/registrar-tipo-de-tarjeta.component';
import { AsignarTarjetaComponent } from './gestionarTarjeta/asignar-tarjeta/asignar-tarjeta.component';
import { RealizarTransferenciaComponent } from './gestionarMovimientos/realizar-transferencia/realizar-transferencia.component';
//import { RealizarMovimientoComponent } from './gestionarMovimientos/realizar-movimiento/realizar-movimiento.component';

const routes: Routes = [
  {path: 'AperturaDeCuenta/:idCliente/:actualizar', component: AperturaDeCuentaComponent},
  {path: 'AperturaDeCuenta/:idCliente', component: AperturaDeCuentaComponent},
  {path: 'AperturaDeCuenta', component: AperturaDeCuentaComponent},
  {path: 'Cuentas', component: CuentasComponent},
  {path: 'Movimientos', component: MovimientosComponent},
  {path: 'Monedas', component: MonedasComponent},
  {path: 'AddMoneda', component: AddMonedaComponent},
  {path: 'RealizarDeposito', component: RealizarDepositoComponent},
  {path: 'RealizarTransferencia', component: RealizarTransferenciaComponent},
  {path: 'RealizarTransferencia/:idCliente', component: RealizarTransferenciaComponent},
  {path: 'Chequeras', component: ChequerasComponent},
  {path: 'RegistrarChequera', component: RegistrarChequeraComponent},
  {path: 'AsignarTarjeta', component: AsignarTarjetaComponent},
  {path: 'HabilitarTarjeta', component: HabilitarTarjetaComponent},
  {path: 'RegistrarTipoDeTarjeta', component: RegistrarTipoDeTarjetaComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovimientoDeCuentaRoutingModule { }
