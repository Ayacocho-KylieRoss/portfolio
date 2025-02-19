import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToIntro(): void {
    const element = document.getElementById('intro-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToMyWorks(): void {
    const element = document.getElementById('my-works-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  goToWebDesigns(): void {
    this.router.navigate(['/web-designs']);
  }

  goToGraphicDesigns(): void {
    this.router.navigate(['/graphic-designs']);
  }

  goToIllustrations(): void {
    this.router.navigate(['/illustrations']);
  }
}
