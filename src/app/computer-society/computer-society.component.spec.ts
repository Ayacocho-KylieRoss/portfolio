import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerSocietyComponent } from './computer-society.component';

describe('ComputerSocietyComponent', () => {
  let component: ComputerSocietyComponent;
  let fixture: ComponentFixture<ComputerSocietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComputerSocietyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComputerSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
