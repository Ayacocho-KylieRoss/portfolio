import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KajasMockupComponent } from './kajas-mockup.component';

describe('KajasMockupComponent', () => {
  let component: KajasMockupComponent;
  let fixture: ComponentFixture<KajasMockupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KajasMockupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KajasMockupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
