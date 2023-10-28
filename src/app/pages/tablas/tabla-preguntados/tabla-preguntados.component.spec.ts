import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPreguntadosComponent } from './tabla-preguntados.component';

describe('TablaPreguntadosComponent', () => {
  let component: TablaPreguntadosComponent;
  let fixture: ComponentFixture<TablaPreguntadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaPreguntadosComponent]
    });
    fixture = TestBed.createComponent(TablaPreguntadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
