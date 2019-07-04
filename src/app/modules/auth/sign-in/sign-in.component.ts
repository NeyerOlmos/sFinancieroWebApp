import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import {BitacoraService} from '../../seguridad/AdministrarBitacora/bitacora.service';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent
extends BaseFormComponent
implements OnInit {
  username: '';
  password: '';
  constructor(private authService: AuthService,
              private snackBar: MatSnackBar,
              private router: Router,
              private bitacoraService: BitacoraService) {
    super();
  }

  ngOnInit() {
  }

  signIn() {
    this.blockView();
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
      this.bitacoraService.log("info",this.username+" inicio sesion");
      this.router.navigateByUrl('/');
      this.snackBar.open('Se inicio Sesion Correctamente', 'ok', {duration: 3000 });
    }).catch(e => {
      this.unblockView();
      if(e.status==400){
        this.snackBar.open(e.error['error_description'], 'Ok',{duration:5000});
      }else if(e.status==0){
        
        this.snackBar.open('algo salio mal intentalo otra vez','Ok',{duration:5000});
      }
      console.log(e['message']);
      console.log(e);
    });

  }


}
