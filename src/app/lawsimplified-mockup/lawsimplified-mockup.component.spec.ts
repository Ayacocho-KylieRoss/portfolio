import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawsimplifiedMockupComponent } from './lawsimplified-mockup.component';

describe('LawsimplifiedMockupComponent', () => {
  let component: LawsimplifiedMockupComponent;
  let fixture: ComponentFixture<LawsimplifiedMockupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LawsimplifiedMockupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LawsimplifiedMockupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
