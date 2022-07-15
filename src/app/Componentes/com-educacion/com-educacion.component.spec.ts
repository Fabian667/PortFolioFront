import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComEducacionComponent } from './com-educacion.component';

describe('ComEducacionComponent', () => {
  let component: ComEducacionComponent;
  let fixture: ComponentFixture<ComEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComEducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
