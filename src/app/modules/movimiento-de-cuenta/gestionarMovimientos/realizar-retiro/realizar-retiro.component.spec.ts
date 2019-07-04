import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarRetiroComponent } from './realizar-retiro.component';

describe('RealizarRetiroComponent', () => {
  let component: RealizarRetiroComponent;
  let fixture: ComponentFixture<RealizarRetiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealizarRetiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizarRetiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
