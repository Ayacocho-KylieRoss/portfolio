import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-web-designs',
  templateUrl: './web-designs.component.html',
  styleUrl: './web-designs.component.css'
})
export class WebDesignsComponent {
  constructor(private router: Router) {
    console.log('WebDesignsComponent loaded');
  }

  goToBioSync(): void {
    this.router.navigate(['/biosync-mockup']);
  }

  goToLikha(): void {
    this.router.navigate(['/likha-mockup']);
  }

  goToKajas(): void {
    this.router.navigate(['/kajas-mockup']);
  }

  goToExtravaganza(): void {
    this.router.navigate(['/extravaganza-mockup']);
  }

}
