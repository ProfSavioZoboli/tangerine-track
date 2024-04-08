import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimaFotoComponent } from './ultima-foto.component';

describe('UltimaFotoComponent', () => {
  let component: UltimaFotoComponent;
  let fixture: ComponentFixture<UltimaFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UltimaFotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UltimaFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
