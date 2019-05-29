import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioEntidadModule } from './modules/usuario-entidad/usuario-entidad.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './modules/auth/sign-up/sign-up.component';

const routes: Routes =
[{path: '', component: HomeComponent},
{path: 'UsuarioEntidad', loadChildren: './modules/usuario-entidad/usuario-entidad.module#UsuarioEntidadModule'},
{path: 'MovimientoCuenta', loadChildren: './modules/movimiento-de-cuenta/movimiento-de-cuenta.module#MovimientoDeCuentaModule'},
{path: 'Auth', loadChildren: './modules/auth/auth.module#AuthModule'},
{path: 'Seguridad', loadChildren: './modules/seguridad/seguridad.module#SeguridadModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
