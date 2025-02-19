import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtravaganzaMockupComponent } from './extravaganza-mockup.component';

describe('ExtravaganzaMockupComponent', () => {
  let component: ExtravaganzaMockupComponent;
  let fixture: ComponentFixture<ExtravaganzaMockupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExtravaganzaMockupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtravaganzaMockupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
