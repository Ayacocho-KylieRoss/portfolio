import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiosyncMockupComponent } from './biosync-mockup.component';

describe('BiosyncMockupComponent', () => {
  let component: BiosyncMockupComponent;
  let fixture: ComponentFixture<BiosyncMockupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BiosyncMockupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiosyncMockupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
