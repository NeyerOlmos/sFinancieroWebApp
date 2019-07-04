import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Dpf } from 'src/app/Models/dpf';

@Injectable({
  providedIn: 'root'
})
export class DpfService {
  readonly apiUrl = environment.WebApiUrl;
  readonly httpOptions = {
    headers: new HttpHeaders({
      accept : 'application/json',
      'content-type': 'application/json',
      Authorization : 'Bearer ' + sessionStorage.getItem('accessToken')
    })
  };
  constructor(private http: HttpClient) { }
  addDPF(dpf:Dpf){
    this.http.post(this.apiUrl+'/api/Dpfs',dpf).toPromise();
  }
}
