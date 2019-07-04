import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDeMovimientosComponent } from './reporte-de-movimientos.component';

describe('ReporteDeMovimientosComponent', () => {
  let component: ReporteDeMovimientosComponent;
  let fixture: ComponentFixture<ReporteDeMovimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteDeMovimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteDeMovimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
