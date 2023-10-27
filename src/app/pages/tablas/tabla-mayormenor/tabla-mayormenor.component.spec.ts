import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMayormenorComponent } from './tabla-mayormenor.component';

describe('TablaMayormenorComponent', () => {
  let component: TablaMayormenorComponent;
  let fixture: ComponentFixture<TablaMayormenorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaMayormenorComponent]
    });
    fixture = TestBed.createComponent(TablaMayormenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
