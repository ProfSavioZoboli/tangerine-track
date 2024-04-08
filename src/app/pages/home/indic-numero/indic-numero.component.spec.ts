import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicNumeroComponent } from './indic-numero.component';

describe('IndicNumeroComponent', () => {
  let component: IndicNumeroComponent;
  let fixture: ComponentFixture<IndicNumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndicNumeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndicNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
