import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamingComponent } from './dreaming.component';

describe('DreamingComponent', () => {
  let component: DreamingComponent;
  let fixture: ComponentFixture<DreamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DreamingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DreamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
