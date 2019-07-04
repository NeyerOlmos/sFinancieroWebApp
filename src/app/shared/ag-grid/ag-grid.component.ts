import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "ag-grid-enterprise";
import "ag-grid-enterprise/chartsModule";


@Component({
  selector: 'ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {
  //@ViewChild('agGrid') agGrid: AgGridNg2;

 @Input() rowData : any;
 @Input() columnDefs :any;
 public searchValue;
 public gridApi;
 public gridColumnApi;
 public popupParent;
  constructor(private http:HttpClient) {
    this.popupParent = document.body;
   }

  ngOnInit() {
  //this.rowData= this.http.get('https://api.myjson.com/bins/15psn9');
  //this.rowData= this.http.get('http://localhost:51177/api/movimientos');
  }
  quickSearch(){
this.gridApi.setQuickFilter(this.searchValue);
  }
  onGridReady(params){
    this.gridApi=params.api;
    this.gridColumnApi=params.columnApi;
   // params.api.setRowData(this.rowData);
  }

}
