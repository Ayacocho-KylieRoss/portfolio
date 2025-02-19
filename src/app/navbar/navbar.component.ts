import { Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMobile = false;
  @ViewChild('sidenav', { static: false }) sidenav!: MatSidenav;

  constructor(private router: Router) {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 767;
  }

  private closeSidenavIfMobile(): void {
    if (this.isMobile && this.sidenav) {
      this.sidenav.close();
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.router.navigate(['/home']);
    this.closeSidenavIfMobile();
  }

  scrollToIntro(): void {
    if (this.router.url !== '/home') {
      this.router.navigate(['/home']).then(() => {
        setTimeout(() => {
          const element = document.getElementById('intro-section');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      });
    } else {
      const element = document.getElementById('intro-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    this.closeSidenavIfMobile();
  }

  scrollToMyWorks(): void {
    if (this.router.url !== '/home') {
      this.router.navigate(['/home']).then(() => {
        setTimeout(() => {
          const element = document.getElementById('my-works-section');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      });
    } else {
      const element = document.getElementById('my-works-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    this.closeSidenavIfMobile();
  }
}
