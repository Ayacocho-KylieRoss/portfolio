import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicDesignsComponent } from './graphic-designs.component';

describe('GraphicDesignsComponent', () => {
  let component: GraphicDesignsComponent;
  let fixture: ComponentFixture<GraphicDesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraphicDesignsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphicDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
