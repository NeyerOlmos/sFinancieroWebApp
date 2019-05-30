import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cliente } from 'src/app/Models/cliente';
import { Persona } from 'src/app/Models/persona';
import { TipoCliente } from 'src/app/Models/tipo-cliente';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/Models/user';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  readonly httpOptions = {
    headers: new HttpHeaders({
      accept : 'application/json',
      'content-type': 'application/json',
      Authorization : 'Bearer ' + sessionStorage.getItem('accessToken')
    })
  };
  readonly apiUrl = environment.WebApiUrl;
clientesList: Cliente[];
  constructor(private http: HttpClient) {
    this.getClientesHabiles().subscribe(clientes => this.clientesList = clientes);
   }





// api/cliente
getClientesHabiles(): Observable<Cliente[]> {
  return this.http.get<Cliente[]>(this.apiUrl + '/api/clientesHabiles', this.httpOptions);

}
getClientes(): Observable<Cliente[]> {
  return this.http.get<Cliente[]>(this.apiUrl + '/api/clientes' , this.httpOptions);

}
getPersonas(): Observable<Persona[]> {
  return this.http.get<Persona[]>(this.apiUrl + '/api/personas/',this.httpOptions).pipe(map(
    (data: Persona[]) => data as Persona[]
  ));
}
getPersona(id: number): Observable<Persona> {
  return this.http.get<Persona>(this.apiUrl + '/api/personas/' + id,this.httpOptions).pipe(map(
    (data: Persona) => data as Persona
  ));
}

getCliente(id: number) {
  return this.http.get<Cliente>(this.apiUrl + '/api/clientes/' + id.toString(),this.httpOptions);
}
getTipoCliente() {
  return this.http.get<TipoCliente[]>(this.apiUrl + '/api/tipoClientes',this.httpOptions).pipe(map(
    (data: TipoCliente[]) => data as TipoCliente[]
  ));
}


deletePersona(id: number) {
 // this.clientesList.find(s=>s.id==id)
 return this.http.delete(this.apiUrl + '/api/clientes/' + id, this.httpOptions).toPromise().then(
   () => {
     this.clientesList = this.clientesList.filter(cliente => cliente.id !== id);
   });
}


deleteCliente(id: number) {

  return this.http.delete(this.apiUrl + '/api/clientes/' + id, this.httpOptions);
}
addPersona(persona: Persona): Promise<any> {
  return this.getPersonas().pipe(map(() => {
   // persona.id=data[data.length-1].id+1;
  return  this.http.post(this.apiUrl + '/api/personas', JSON.parse(JSON.stringify(persona)),this.httpOptions).toPromise();
     })).toPromise();
  }

  registerUser(user: User,roles :string[]) {
    const body={
      Id:user.Id,
      UserName:user.UserName,
      Email:user.Email,
      Password:user.Password,
      FirstName:user.FirstName,
      LastName:user.LastName,
      SecondLastName:user.SecondLastName,
      Roles:roles
    }
    var reqHeader= new HttpHeaders({'No-Auth':'True'})
    return this.http.post(this.apiUrl + '/api/Account/Register',body,{headers:reqHeader} ).toPromise();
  }

addCliente(cliente: Cliente) {
  
  return  this.http.post(this.apiUrl + '/api/clientes', JSON.parse(JSON.stringify(cliente)),this.httpOptions).toPromise();
   // })).toPromise();
  }
actualizarCliente(persona: Persona) {
return this.http.put<Persona>(this.apiUrl + '/api/personas/' + persona.id, persona,this.httpOptions);
}







}
