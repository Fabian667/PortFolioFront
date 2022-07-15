import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComAcercaDeComponent } from './com-acerca-de.component';

describe('ComAcercaDeComponent', () => {
  let component: ComAcercaDeComponent;
  let fixture: ComponentFixture<ComAcercaDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComAcercaDeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComAcercaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
