import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComProyectosComponent } from './com-proyectos.component';

describe('ComProyectosComponent', () => {
  let component: ComProyectosComponent;
  let fixture: ComponentFixture<ComProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComProyectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
