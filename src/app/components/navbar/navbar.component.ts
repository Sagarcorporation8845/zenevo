import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled">
      <div class="nav-container">
        <div class="nav-brand">
          <span class="brand-text">ZENEVO</span>
          <span class="brand-tagline">INNOVATION</span>
        </div>
        
        <div class="nav-menu" [class.active]="isMenuOpen">
          <a routerLink="/" class="nav-link" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a routerLink="/about" class="nav-link" routerLinkActive="active">About</a>
          <a routerLink="/vision" class="nav-link" routerLinkActive="active">Vision</a>
          <a routerLink="/products" class="nav-link" routerLinkActive="active">Products</a>
          <a routerLink="/team" class="nav-link" routerLinkActive="active">Team</a>
          <a routerLink="/careers" class="nav-link" routerLinkActive="active">Careers</a>
          <a routerLink="/contact" class="nav-link" routerLinkActive="active">Contact</a>
        </div>
        
        <div class="nav-toggle" (click)="toggleMenu()" [class.active]="isMenuOpen">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(15, 15, 15, 0.9);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(0, 255, 209, 0.1);
      z-index: 1000;
      transition: all 0.3s ease;
    }
    
    .navbar.scrolled {
      background: rgba(15, 15, 15, 0.95);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }
    
    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 var(--space-md);
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;
    }
    
    .nav-brand {
      font-family: 'Orbitron', monospace;
      font-weight: 900;
      font-size: 1.5rem;
      display: flex;
      flex-direction: column;
      line-height: 1;
    }
    
    .brand-text {
      background: linear-gradient(45deg, var(--accent-teal), var(--accent-green));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .brand-tagline {
      font-size: 0.7rem;
      color: var(--text-secondary);
      letter-spacing: 2px;
    }
    
    .nav-menu {
      display: flex;
      gap: var(--space-xl);
    }
    
    .nav-link {
      color: var(--text-secondary);
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
      position: relative;
      padding: var(--space-sm) 0;
    }
    
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--accent-teal);
      transition: width 0.3s ease;
    }
    
    .nav-link:hover,
    .nav-link.active {
      color: var(--accent-teal);
    }
    
    .nav-link:hover::after,
    .nav-link.active::after {
      width: 100%;
    }
    
    .nav-toggle {
      display: none;
      flex-direction: column;
      cursor: pointer;
      gap: 4px;
    }
    
    .nav-toggle span {
      width: 25px;
      height: 3px;
      background: var(--accent-teal);
      transition: all 0.3s ease;
    }
    
    @media (max-width: 768px) {
      .nav-menu {
        position: fixed;
        top: 80px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 80px);
        background: rgba(15, 15, 15, 0.95);
        backdrop-filter: blur(10px);
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding-top: var(--space-3xl);
        transition: left 0.3s ease;
      }
      
      .nav-menu.active {
        left: 0;
      }
      
      .nav-toggle {
        display: flex;
      }
      
      .nav-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      
      .nav-toggle.active span:nth-child(2) {
        opacity: 0;
      }
      
      .nav-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
      }
    }
  `]
})
export class NavbarComponent {
  isScrolled = false;
  isMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}