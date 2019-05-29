import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/Models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 readonly apiUrl = environment.WebApiUrl;
  constructor(private http: HttpClient,private router:Router) { }

signUp(email: string, password: string, confirmPassword: string ) {
  return this.http.post(this.apiUrl + '/api/Account/Register', {
    email,
    password,
    confirmPassword
  });
}
registerUser(user: User,roles :string[]) {
  const body={
    UserName:user.UserName,
    Email:user.Email,
    Password:user.Password,
    FirstName:user.FirstName,
    LastName:user.LastName,
    Roles:roles
  }
  var reqHeader= new HttpHeaders({'No-Auth':'True'})
  return this.http.post(this.apiUrl + '/api/Account/Register',body,{headers:reqHeader} ).toPromise();
}
signIn(username: string, password: string) {
// tslint:disable-next-line: max-line-length
const data = 'username=' + username + '&password=' + password + '&grant_type=password';
const reqHeader = new HttpHeaders({'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True'});
return this.http.post(this.apiUrl + '/Token' , data , {headers: reqHeader} ).toPromise();
}
logOut(){
  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("roles");
  sessionStorage.removeItem("username");
  this.router.navigateByUrl("/Auth/SignIn");
}
getUserClaims() {
  return this.http.get(this.apiUrl + '/api/GetUserClaims');
}
getAllRoles() {
  const reqHeader = new HttpHeaders({'No-Auth': 'True'});
  return this.http.get(this.apiUrl + '/api/GetAllRoles', {headers: reqHeader}).toPromise();
}
getRolesByUser(_username: string){
  const reqHeader = new HttpHeaders({'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")});
  var body={
    username:_username
  }
  
  return this.http.post(this.apiUrl + '/api/Account/GetRolesByUser', body , {headers: reqHeader}).toPromise();

}
isLogged(): boolean {

  if ( sessionStorage.getItem("accessToken") != null){
    
  return true;
  }else{return false;}
}
readonly operadorActions: string[] =['ver', 'eliminar',"editar", 'crear']; 
readonly operadorModules: string[] =['seguridad', 'usuario entidad','auth', 'movimiento de cuenta' , 'servicios']; 
readonly clienteModules: string[] =['servicios','movimiento de cuenta']; 
readonly clienteActions: string[] =[ 'gestionar solicitud', 'realizar pago de credito', 'realizar transaccion', 'reporte de movimiento', 'habilitar tarjeta', 'realizar pago de servicios']; 
hasPermission(roles: string,  _module?: string , action?: string){
 if(roles ==null){
   return false;
 }

  if(roles.includes('Admin')){
      return true;
  }else if (roles.includes('Operador')  && this.operadorModules.includes(_module) ){
      
    return true;

  }else if(roles.includes('Cliente') && this.clienteModules.includes(_module)){
    
    if(action!=null){
        if(this.  clienteActions.includes(action)){
          return true;
        }else {
          return false;
        }
      }
      return true;

  }else {
    return false;
  }
}
getBitacora(){

}
}
