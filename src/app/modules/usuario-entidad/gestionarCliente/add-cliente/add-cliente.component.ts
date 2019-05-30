import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Persona } from 'src/app/Models/persona';
import { Cliente } from 'src/app/Models/cliente';
import { TipoCliente } from 'src/app/Models/tipo-cliente';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {
  tipoClientesControl = new FormControl('', [Validators.required]);
persona: Persona;
tipoClientes: TipoCliente[] = new Array<TipoCliente>();
id: string;
tipoClienteSeleccionado: string;
email: string;
userName: string;
password: string;
  constructor(private router: Router, private clienteService: ClienteService, private activateRouter: ActivatedRoute) { }

  ngOnInit() {

    this.persona = new Persona();
    if (this.activateRouter.snapshot.paramMap.has("id")) {
      this.id = this.activateRouter.snapshot.paramMap.get("id");
      console.log(this.id);
      this.clienteService.getPersona(Number(this.id)).subscribe(val => this.persona = val);
    }

    this.clienteService.getTipoCliente().subscribe(tipoClientes => {console.log(tipoClientes); this.tipoClientes = tipoClientes; });
  }

  addCliente() {

    const cliente: Cliente = new Cliente();
    var user:User = new User();
    this.clienteService.addPersona(this.persona).then(persona => {
       console.log('se añadio correctamente a la persona');
       cliente.idPersona = persona.id;
       cliente.estado = 'Habilitado';
       cliente.idTipoC = +this.tipoClienteSeleccionado;
       cliente.fechaReg = new Date(Date.now.toString());
       this.clienteService.addCliente(cliente).then(value => {
        console.log('se añadio al cliente exitosamente');
        console.log(value);
        console.log(value["id"]);
        user.Id = value["id"].toString();
        user.Email=this.email;
        user.UserName=this.userName;
        user.Password=this.password;
        user.FirstName=this.persona.nombre;
        user.LastName=this.persona.paterno;
        user.SecondLastName=this.persona.materno;
        this.clienteService.registerUser(user, ['Cliente'] ).then(val => {
          console.log('user registrado');
          console.log(val);  
          this.router.navigateByUrl('/MovimientoCuenta/AperturaDeCuenta/' + cliente.id);
        })
    });

      });

   }
   actualizarCliente() {
     console.log(this.persona);
     this.clienteService.actualizarCliente(this.persona).subscribe(val =>

      console.log('actualizacion exitosa')
      );
   }
}
