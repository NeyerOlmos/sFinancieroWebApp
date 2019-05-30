import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  username: '';
  password: '';
  constructor(private authService: AuthService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }

  signIn() {
    this.authService.signIn(this.username, this.password).then(val => {
      sessionStorage.setItem('accessToken', val['access_token']);
      sessionStorage.setItem('username', this.username);
      this.authService.getRolesByUser(this.username).then(val=>{
        sessionStorage.setItem('roles', 
        val.toString());
        if(val.toString().includes("Cliente")){
  
          this.router.navigateByUrl('/UsuarioEntidad/detalleCliente/11');
        }
      })

      this.router.navigateByUrl('/');
      this.snackBar.open('Se inicio Sesion Correctamente', 'ok', {duration: 3000 });
    }).catch(e => {
      console.log(e);
    });

  }


}
