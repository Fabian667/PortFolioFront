import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComEncabezadoComponent } from './com-encabezado.component';

describe('ComEncabezadoComponent', () => {
  let component: ComEncabezadoComponent;
  let fixture: ComponentFixture<ComEncabezadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComEncabezadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComEncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
