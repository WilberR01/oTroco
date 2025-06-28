import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPadraoComponent } from './form-padrao.component';

describe('FormPadraoComponent', () => {
  let component: FormPadraoComponent;
  let fixture: ComponentFixture<FormPadraoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPadraoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
