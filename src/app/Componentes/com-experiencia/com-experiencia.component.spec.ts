import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComExperienciaComponent } from './com-experiencia.component';

describe('ComExperienciaComponent', () => {
  let component: ComExperienciaComponent;
  let fixture: ComponentFixture<ComExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComExperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
