import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-graphic-designs',
  templateUrl: './graphic-designs.component.html',
  styleUrl: './graphic-designs.component.css'
})
export class GraphicDesignsComponent {
  constructor(private router: Router) {
    console.log('GraphicDesignsComponent loaded');
  }

  goToComputerSociety(): void {
    this.router.navigate(['/cs-mockup']);
  }
  
  goToOther(): void {
    this.router.navigate(['/otherProjects-mockup']);
  }
}
