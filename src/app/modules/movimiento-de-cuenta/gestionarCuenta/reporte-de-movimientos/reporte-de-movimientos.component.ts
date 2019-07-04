import { Component, OnInit } from '@angular/core';
import { MovimientoDeCuentaService } from '../../movimiento-de-cuenta.service';
import { of } from 'rxjs/internal/observable/of';
import { catchError } from 'rxjs/internal/operators/catchError';

@Component({
  selector: 'app-reporte-de-movimientos',
  templateUrl: './reporte-de-movimientos.component.html',
  styleUrls: ['./reporte-de-movimientos.component.css']
})
export class ReporteDeMovimientosComponent implements OnInit {
  data: any;
  
  colDefs: { headerName: string; field: string; }[];

  movimientos$=this.movimientoDeCuentaService.movimientos$.pipe(
    catchError(error=>{
      console.log(error);
      return of(null);
    })
  )
  constructor(private movimientoDeCuentaService:MovimientoDeCuentaService) { }

  ngOnInit() {
    this.data = this.movimientoDeCuentaService.getMovimientos();
    //this.http.get('http://localhost:51177/api/movimientos');
    this.colDefs= [
      {
        headerName: 'ID',
        field: 'id'
      },
      {
        headerName: 'Description', 
        field: 'descripcion'
      },
      {
        headerName: 'Fecha', 
        field: 'fechaHora'
      },
      {
        headerName: 'Monto', 
        field: 'monto'
      },
      {
        headerName: 'IdCuenta', 
        field: 'idCuenta'
      }
  ];
  }

}
