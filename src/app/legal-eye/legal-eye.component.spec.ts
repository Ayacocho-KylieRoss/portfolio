import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalEyeComponent } from './legal-eye.component';

describe('LegalEyeComponent', () => {
  let component: LegalEyeComponent;
  let fixture: ComponentFixture<LegalEyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LegalEyeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegalEyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
