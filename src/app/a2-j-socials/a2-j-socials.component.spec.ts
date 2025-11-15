import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A2JSocialsComponent } from './a2-j-socials.component';

describe('A2JSocialsComponent', () => {
  let component: A2JSocialsComponent;
  let fixture: ComponentFixture<A2JSocialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [A2JSocialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(A2JSocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
