import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikhaMockupComponent } from './likha-mockup.component';

describe('LikhaMockupComponent', () => {
  let component: LikhaMockupComponent;
  let fixture: ComponentFixture<LikhaMockupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LikhaMockupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LikhaMockupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
