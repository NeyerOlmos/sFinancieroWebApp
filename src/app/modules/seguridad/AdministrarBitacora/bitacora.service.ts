import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BitacoraService {
  readonly apiUrl = environment.WebApiUrl;
  constructor(private http: HttpClient) {
  }
      getBitacora(){
         return this.http.get(this.apiUrl + '/api/Bitacora');
      }
      log( type: string, message: string){
        var body={
          message,
          type
        }
        const reqHeader = new HttpHeaders({'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")});
        return this.http.post(this.apiUrl + "/aspi/Bitacora",body,{headers: reqHeader} );

      }
}
