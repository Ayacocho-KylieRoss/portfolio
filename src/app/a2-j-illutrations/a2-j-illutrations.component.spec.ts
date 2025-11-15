import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A2JIllutrationsComponent } from './a2-j-illutrations.component';

describe('A2JIllutrationsComponent', () => {
  let component: A2JIllutrationsComponent;
  let fixture: ComponentFixture<A2JIllutrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [A2JIllutrationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(A2JIllutrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
