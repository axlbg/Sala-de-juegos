import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAhorcadoComponent } from './tabla-ahorcado.component';

describe('TablaAhorcadoComponent', () => {
  let component: TablaAhorcadoComponent;
  let fixture: ComponentFixture<TablaAhorcadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaAhorcadoComponent]
    });
    fixture = TestBed.createComponent(TablaAhorcadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
