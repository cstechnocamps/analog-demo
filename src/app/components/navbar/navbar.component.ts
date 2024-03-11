import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public isMobileMenuOpen: boolean = false;
  public activeLink!: string; // Default active link
  private routerSubscription: Subscription;

  constructor(private router: Router) {
    this.activeLink = this.router.url;

    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)).subscribe(
        (event: any) => {
          if(event.url.startsWith('/') && event.url.length > 1) {
            this.activeLink = event.url.slice(1);
          } else if (event.url == ('/')) {
            this.activeLink = 'home';
          } else {
            this.activeLink = event.url;
          }
        }
      );
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Ensure to unsubscribe from the observable to avoid memory leaks
  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
