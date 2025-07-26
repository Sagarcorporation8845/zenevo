import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet, provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from './app/app.routes';
import { NavbarComponent } from './app/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <div class="brand-logo">
              <span class="brand-text">ZENEVO</span>
              <span class="brand-tagline">INNOVATION</span>
            </div>
            <p class="brand-description">
              Engineering tomorrow's technology today. Pioneering solutions that transform industries and enhance human potential.
            </p>
          </div>
          <div class="footer-links">
            <div class="link-group">
              <h4>Company</h4>
              <a routerLink="/about">About Us</a>
              <a routerLink="/vision">Our Vision</a>
              <a routerLink="/team">Team</a>
              <a routerLink="/careers">Careers</a>
            </div>
            <div class="link-group">
              <h4>Solutions</h4>
              <a routerLink="/products">Products</a>
              <a href="#services">Services</a>
              <a href="#support">Support</a>
              <a href="#documentation">Docs</a>
            </div>
            <div class="link-group">
              <h4>Connect</h4>
              <a routerLink="/contact">Contact</a>
              <a href="#linkedin">LinkedIn</a>
              <a href="#twitter">Twitter</a>
              <a href="#github">GitHub</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 Zenevo Innovation. All rights reserved.</p>
          <div class="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .main-content {
      margin-top: 80px;
      min-height: calc(100vh - 80px);
    }

    .footer {
      background: var(--bg-secondary);
      border-top: 1px solid rgba(0, 255, 209, 0.2);
      padding: var(--space-3xl) 0 var(--space-xl);
      margin-top: var(--space-3xl);
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: var(--space-3xl);
      margin-bottom: var(--space-2xl);
    }

    .footer-brand {
      max-width: 400px;
    }

    .brand-logo {
      display: flex;
      flex-direction: column;
      margin-bottom: var(--space-lg);
    }

    .brand-text {
      font-family: 'Orbitron', monospace;
      font-size: 2rem;
      font-weight: 900;
      background: linear-gradient(45deg, var(--accent-teal), var(--accent-green));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .brand-tagline {
      font-family: 'Orbitron', monospace;
      font-size: 0.8rem;
      color: var(--text-secondary);
      letter-spacing: 3px;
      font-weight: 500;
    }

    .brand-description {
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .footer-links {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-xl);
    }

    .link-group h4 {
      color: var(--accent-teal);
      margin-bottom: var(--space-md);
      font-size: 1.1rem;
      font-weight: 600;
    }

    .link-group a {
      display: block;
      color: var(--text-secondary);
      text-decoration: none;
      margin-bottom: var(--space-sm);
      transition: all 0.3s ease;
      font-size: 0.9rem;
    }

    .link-group a:hover {
      color: var(--accent-teal);
      transform: translateX(4px);
    }

    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: var(--space-lg);
      border-top: 1px solid rgba(0, 255, 209, 0.1);
    }

    .footer-bottom p {
      color: var(--text-secondary);
      font-size: 0.9rem;
      margin: 0;
    }

    .footer-legal {
      display: flex;
      gap: var(--space-lg);
    }

    .footer-legal a {
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }

    .footer-legal a:hover {
      color: var(--accent-teal);
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: var(--space-2xl);
      }

      .footer-links {
        grid-template-columns: 1fr;
        gap: var(--space-lg);
      }

      .footer-bottom {
        flex-direction: column;
        gap: var(--space-md);
        text-align: center;
      }
    }
  `]
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});