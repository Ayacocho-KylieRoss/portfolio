import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawadvisorComponent } from './lawadvisor.component';

describe('LawadvisorComponent', () => {
  let component: LawadvisorComponent;
  let fixture: ComponentFixture<LawadvisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LawadvisorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LawadvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
