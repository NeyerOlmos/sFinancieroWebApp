import { Component, OnInit } from '@angular/core';
import { BitacoraService } from '../bitacora.service';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css']
})
export class BitacoraComponent implements OnInit {

  constructor(private bitacoraService: BitacoraService) { }
  bitacora: any;
  ngOnInit() {
    this.getBitacora();
  }
  getBitacora(){
    this.bitacoraService.getBitacora().subscribe(val=>{
      console.log(val);
      this.bitacora = val;
    });
  }
download(){}
resetBitacora(){}
}
