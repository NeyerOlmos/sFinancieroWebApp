import { Injectable } from '@angular/core';
import { TipoCuenta } from 'src/app/Models/tipo-cuenta';
import { Cuenta } from 'src/app/Models/cuenta';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Moneda } from 'src/app/Models/moneda';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CuentasService {
  readonly apiUrl = environment.WebApiUrl;
  readonly httpOptions = {
    headers: new HttpHeaders({
      accept : 'application/json',
      'content-type': 'application/json',
      Authorization : 'Bearer ' + sessionStorage.getItem('accessToken')
    })
  };
  constructor(private http: HttpClient) { }


  getTiposDeCuenta() {
    return this.http.get<TipoCuenta[]>(this.apiUrl + '/api/tipoCuentas');
  }
  getCuentas() {
    return this.http.get<Cuenta[]>(this.apiUrl + '/api/Cuentas');
  }
  getCuentaById(idCuenta: number) {
    return this.http.get<Cuenta>(this.apiUrl + '/api/cuentas/' + idCuenta);
  }
  getCuentaByNroCuenta(nroCuenta: string): Observable<Cuenta> {
// tslint:disable-next-line: triple-equals
  return  this.getCuentas().pipe(map(values => values.find(c => c.nroCuenta == nroCuenta) ));
  }

  getMonedas() {
    return this.http.get<Moneda[]>(this.apiUrl + '/api/Monedas');

  }
  addCuenta(cuenta: Cuenta): Promise<any> {
   return this.getCuentas().pipe(map(() => {
     // cuenta.id=data[data.length-1].id+1;

      return this.http.post(this.apiUrl + '/api/Cuentas', JSON.parse(JSON.stringify(cuenta))).toPromise();
    })).toPromise();

  }
  getSaldoDeCuenta(idCuenta: number): Observable<number> {
return this.getCuentaById(idCuenta).pipe(map(value => {
  return value.saldo;
}));
}



updateCuenta(cuenta: Cuenta, id: number) {
  return this.http.put(this.apiUrl + '/api/cuentas/' + id, cuenta).toPromise();
}
getCuentasByClienteId( id: string):Observable<Cuenta[]>{
  
  const body={
    id:id
  }
  return this.http.post<Cuenta[]>(this.apiUrl + '/api/CuentasByClienteId' ,body,this.httpOptions);
}
}
