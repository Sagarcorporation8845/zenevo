import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-hero section">
      <div class="container">
        <div class="hero-content text-center">
          <h1 class="section-title">About Zenevo Innovation</h1>
          <p class="section-subtitle">Pioneering the future through cutting-edge technology</p>
        </div>
      </div>
    </section>

    <section class="story-section section">
      <div class="container">
        <div class="grid" style="grid-template-columns: 1fr 1fr; align-items: center; gap: var(--space-3xl);">
          <div class="story-content">
            <h2>Our Story</h2>
            <p>
              Founded in 2025, Zenevo Innovation emerged from a vision to bridge the gap between 
              imagination and reality. We are not just another tech company—we are architects of 
              the future, crafting solutions that transform industries and enhance human potential.
            </p>
            <p>
              Our journey began with a simple belief: technology should serve humanity's greatest 
              aspirations. Today, we continue to push boundaries, creating innovations that seemed 
              impossible yesterday.
            </p>
          </div>
          <div class="story-visual">
            <div class="visual-card">
              <div class="hologram-effect"></div>
              <h3>2025</h3>
              <p>Founded with a vision to revolutionize technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="timeline-section section">
      <div class="container">
        <h2 class="section-title text-center">Our Journey</h2>
        <div class="timeline">
          <div class="timeline-item" *ngFor="let milestone of milestones; let i = index" 
               [class.fade-in]="true">
            <div class="timeline-marker">
              <div class="marker-dot"></div>
            </div>
            <div class="timeline-content">
              <div class="timeline-year">{{ milestone.year }}</div>
              <h3>{{ milestone.title }}</h3>
              <p>{{ milestone.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="values-section section">
      <div class="container">
        <h2 class="section-title text-center">Our Values</h2>
        <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
          <div class="value-card card" *ngFor="let value of values">
            <div class="value-icon">{{ value.icon }}</div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-hero {
      background: linear-gradient(135deg, rgba(0, 255, 209, 0.1), rgba(18, 225, 147, 0.1));
      min-height: 60vh;
    }

    .section-title {
      font-size: 3rem;
      margin-bottom: var(--space-lg);
    }

    .section-subtitle {
      font-size: 1.3rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto;
    }

    .story-content h2 {
      margin-bottom: var(--space-lg);
    }

    .story-visual {
      display: flex;
      justify-content: center;
    }

    .visual-card {
      position: relative;
      padding: var(--space-2xl);
      background: rgba(31, 31, 31, 0.5);
      border: 2px solid var(--accent-teal);
      border-radius: var(--radius-lg);
      text-align: center;
      min-height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
    }

    .hologram-effect {
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(0, 255, 209, 0.3), transparent);
      animation: hologram-scan 3s infinite;
    }

    @keyframes hologram-scan {
      0% { left: -100%; }
      100% { left: 100%; }
    }

    .visual-card h3 {
      font-size: 3rem;
      color: var(--accent-teal);
      margin-bottom: var(--space-sm);
    }

    .timeline {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 2px;
      background: var(--accent-teal);
      transform: translateX(-50%);
    }

    .timeline-item {
      position: relative;
      margin-bottom: var(--space-3xl);
      display: flex;
      align-items: center;
    }

    .timeline-item:nth-child(odd) {
      flex-direction: row-reverse;
    }

    .timeline-marker {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
    }

    .marker-dot {
      width: 20px;
      height: 20px;
      background: var(--accent-teal);
      border-radius: 50%;
      border: 4px solid var(--bg-primary);
      box-shadow: 0 0 20px var(--accent-teal);
    }

    .timeline-content {
      flex: 1;
      max-width: 45%;
      padding: var(--space-lg);
      background: rgba(31, 31, 31, 0.8);
      border-radius: var(--radius-lg);
      border: 1px solid rgba(0, 255, 209, 0.2);
    }

    .timeline-year {
      font-family: 'Orbitron', monospace;
      font-size: 1.5rem;
      color: var(--accent-teal);
      font-weight: 700;
      margin-bottom: var(--space-sm);
    }

    .timeline-content h3 {
      margin-bottom: var(--space-sm);
    }

    .values-section {
      background: rgba(18, 225, 147, 0.02);
    }

    .value-card {
      text-align: center;
    }

    .value-icon {
      font-size: 3rem;
      margin-bottom: var(--space-lg);
    }

    @media (max-width: 768px) {
      .grid[style*="1fr 1fr"] {
        grid-template-columns: 1fr !important;
      }

      .timeline::before {
        left: 20px;
      }

      .timeline-item {
        flex-direction: row !important;
        padding-left: 50px;
      }

      .timeline-marker {
        left: 20px;
      }

      .timeline-content {
        max-width: 100%;
      }

      .section-title {
        font-size: 2rem;
      }
    }
  `]
})
export class AboutComponent {
  milestones = [
    {
      year: '2025',
      title: 'Company Founded',
      description: 'Zenevo Innovation was born with a mission to revolutionize technology solutions.'
    },
    {
      year: '2025',
      title: 'First Product Launch',
      description: 'Released our flagship ESP32-based attendance system with cutting-edge features.'
    },
    {
      year: '2025',
      title: 'Innovation Lab',
      description: 'Established our R&D facility to pioneer next-generation technologies.'
    },
    {
      year: '2025',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients worldwide with innovative solutions.'
    }
  ];

  values = [
    {
      icon: '🚀',
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible, turning visionary ideas into reality.'
    },
    {
      icon: '🎯',
      title: 'Precision Engineering',
      description: 'Every solution is crafted with meticulous attention to detail and performance optimization.'
    },
    {
      icon: '🌐',
      title: 'Global Impact',
      description: 'Our technologies are designed to make a positive difference on a worldwide scale.'
    },
    {
      icon: '🤝',
      title: 'Collaborative Spirit',
      description: 'We believe in the power of teamwork and partnership to achieve extraordinary results.'
    }
  ];
}