import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TipoCuenta } from 'src/app/Models/tipo-cuenta';
import { Cuenta } from 'src/app/Models/cuenta';
import { Moneda } from 'src/app/Models/moneda';
import { environment } from 'src/environments/environment';
import { Movimiento } from 'src/app/Models/movimiento';
import { Observable } from 'rxjs/internal/Observable';
import { Retiro } from 'src/app/Models/retiro';
import { CuentasService } from './gestionarCuenta/cuentas.service';
import { catchError, tap, map } from 'rxjs/operators';
import { DetalleMov } from 'src/app/Models/detalle-mov';
import { combineLatest } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovimientoDeCuentaService {
  constructor(private http: HttpClient, private cuentasService: CuentasService) { }
  readonly apiUrl = environment.WebApiUrl;
  readonly httpOptions = {
    headers: new HttpHeaders({
      accept : 'application/json',
      'content-type': 'application/json',
      Authorization : 'Bearer ' + sessionStorage.getItem('accessToken')
    })
  };
// tslint:disable-next-line: max-line-length
  movimientos$ = this.http.get<Movimiento[]>(this.apiUrl + '/api/Movimientos' , this.httpOptions).pipe(
    tap(console.log), 
    catchError(err => {
      throw new Error('error:' + err);
      }
    )
  );
  detalleMovimientos$ = this.http.get<DetalleMov[]>(this.apiUrl + '/api/detallemovimientos' , this.httpOptions).pipe(
    tap(console.log), 
    catchError(err => {
      throw new Error('error:' + err);
    }
    )
    );
  movimientosWithDetalle$=combineLatest(
    this.movimientos$,
    this.detalleMovimientos$
  ).pipe(
    map(([Movimientos,DetalleMov])=>
      Movimientos.map(
        m=>({
          detalleMov:DetalleMov.find(c=>m.id===c.id)
        } as Movimiento)
      )
    )
  );



  getTipoDeCuenta() {
    return this.http.get<TipoCuenta>(this.apiUrl + '/api/tipoCuentas', this.httpOptions);
  }
  getCuentas() {
    return this.http.get<Cuenta[]>(this.apiUrl + '/api/Cuentas', this.httpOptions);
  }

  getMovimientos(): Observable<Movimiento[]> {
    return this.http.get<Movimiento[]>(this.apiUrl + '/api/Movimientos' , this.httpOptions);
  }


Depositar() {
    // return this.http.post<>();

  }
 Retirar({ cuenta, monto }: { cuenta: Cuenta; monto: number; }): Promise<any> {
  cuenta.saldo = cuenta.saldo - monto;
  return this.cuentasService.updateCuenta(cuenta, cuenta.id).then(() => {
    const retiro: Retiro = new Retiro();
    retiro.idCuenta = cuenta.id;
    retiro.monto = monto;
    retiro.idOf = 1;
    retiro.fechaHora = new Date(Date.now());
    this.http.post(this.apiUrl + '/api/Retiros', retiro).toPromise();
  });

 }
Transferir(nroCuenta1, nroCuenta2, monto, descripcion, oficina, ubicacion) {

  const body = {

    nroCuenta1,
    nroCuenta2,
    monto,
    descripcion,
    oficina,
    ubicacion
  };
  return this.http.post( this.apiUrl + '/api/RealizarTransferencia', body , this.httpOptions ).toPromise();
}




}
