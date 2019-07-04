import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDPFComponent } from './add-dpf.component';

describe('AddDPFComponent', () => {
  let component: AddDPFComponent;
  let fixture: ComponentFixture<AddDPFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDPFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDPFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
