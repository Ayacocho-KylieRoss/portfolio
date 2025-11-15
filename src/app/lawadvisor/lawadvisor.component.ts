import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-lawadvisor',
  templateUrl: './lawadvisor.component.html',
  styleUrl: './lawadvisor.component.css'
})
export class LawadvisorComponent {
    constructor(private router: Router) {
    console.log('LawadvisorComponent loaded');
  }

  goToLegalEyeIcons(): void {
    this.router.navigate(['/legalEye-icons']);
  }

  goToA2JIllustrations(): void {
  this.router.navigate(['/a2j-illustrations']);
  }

  goToA2JSocials(): void {
    this.router.navigate(['/a2j-socials']);
  }
}
