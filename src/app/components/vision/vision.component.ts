import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="vision-hero section">
      <div class="container">
        <div class="split-layout">
          <div class="vision-visual">
            <div class="holographic-display">
              <div class="holo-rings">
                <div class="ring ring-1"></div>
                <div class="ring ring-2"></div>
                <div class="ring ring-3"></div>
              </div>
              <div class="center-orb"></div>
            </div>
          </div>
          <div class="vision-content">
            <h1 class="section-title">Our Vision</h1>
            <div class="typing-text">
              <p class="vision-statement">
                To become the catalyst that transforms human potential through 
                revolutionary technology, creating a future where innovation 
                seamlessly integrates with everyday life.
              </p>
            </div>
            <div class="vision-points">
              <div class="point-item" *ngFor="let point of visionPoints">
                <div class="point-icon">{{ point.icon }}</div>
                <div class="point-text">
                  <h3>{{ point.title }}</h3>
                  <p>{{ point.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mission-section section">
      <div class="container">
        <div class="split-layout reverse">
          <div class="mission-content">
            <h2 class="section-title">Our Mission</h2>
            <p class="mission-statement">
              We engineer tomorrow's solutions today, combining cutting-edge technology 
              with human-centered design to solve the world's most complex challenges.
            </p>
            <div class="mission-pillars">
              <div class="pillar" *ngFor="let pillar of missionPillars">
                <div class="pillar-header">
                  <span class="pillar-number">{{ pillar.number }}</span>
                  <h4>{{ pillar.title }}</h4>
                </div>
                <p>{{ pillar.description }}</p>
              </div>
            </div>
          </div>
          <div class="mission-visual">
            <div class="circuit-board">
              <div class="circuit-lines"></div>
              <div class="circuit-nodes">
                <div class="node" *ngFor="let node of circuitNodes" 
                     [style.left.%]="node.x" [style.top.%]="node.y"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="future-section section">
      <div class="container">
        <h2 class="section-title text-center">The Future We're Building</h2>
        <div class="future-grid">
          <div class="future-card" *ngFor="let future of futureAreas">
            <div class="card-glow"></div>
            <div class="future-icon">{{ future.icon }}</div>
            <h3>{{ future.title }}</h3>
            <p>{{ future.description }}</p>
            <div class="progress-bar">
              <div class="progress-fill" [style.width.%]="future.progress"></div>
            </div>
            <span class="progress-text">{{ future.progress }}% Progress</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .split-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-3xl);
      align-items: center;
      min-height: 80vh;
    }

    .split-layout.reverse {
      grid-template-columns: 1fr 1fr;
    }

    .split-layout.reverse .mission-content {
      order: 1;
    }

    .split-layout.reverse .mission-visual {
      order: 2;
    }

    .holographic-display {
      position: relative;
      width: 400px;
      height: 400px;
      margin: 0 auto;
    }

    .holo-rings {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .ring {
      position: absolute;
      border: 2px solid var(--accent-teal);
      border-radius: 50%;
      opacity: 0.6;
    }

    .ring-1 {
      width: 100%;
      height: 100%;
      animation: rotate 20s linear infinite;
    }

    .ring-2 {
      width: 75%;
      height: 75%;
      top: 12.5%;
      left: 12.5%;
      border-color: var(--accent-green);
      animation: rotate 15s linear infinite reverse;
    }

    .ring-3 {
      width: 50%;
      height: 50%;
      top: 25%;
      left: 25%;
      animation: rotate 10s linear infinite;
    }

    .center-orb {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 60px;
      height: 60px;
      background: radial-gradient(circle, var(--accent-teal), var(--accent-green));
      border-radius: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 40px var(--accent-teal);
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes pulse {
      0%, 100% { 
        transform: translate(-50%, -50%) scale(1);
        box-shadow: 0 0 40px var(--accent-teal);
      }
      50% { 
        transform: translate(-50%, -50%) scale(1.1);
        box-shadow: 0 0 60px var(--accent-teal);
      }
    }

    .vision-statement {
      font-size: 1.3rem;
      line-height: 1.8;
      margin-bottom: var(--space-2xl);
      color: var(--text-primary);
    }

    .vision-points {
      display: flex;
      flex-direction: column;
      gap: var(--space-lg);
    }

    .point-item {
      display: flex;
      align-items: flex-start;
      gap: var(--space-md);
      padding: var(--space-lg);
      background: rgba(31, 31, 31, 0.5);
      border-radius: var(--radius-lg);
      border-left: 4px solid var(--accent-teal);
      transition: all 0.3s ease;
    }

    .point-item:hover {
      background: rgba(31, 31, 31, 0.8);
      transform: translateX(8px);
    }

    .point-icon {
      font-size: 2rem;
      min-width: 60px;
    }

    .point-text h3 {
      margin-bottom: var(--space-sm);
      color: var(--accent-teal);
    }

    .mission-section {
      background: rgba(18, 225, 147, 0.02);
    }

    .mission-statement {
      font-size: 1.2rem;
      margin-bottom: var(--space-2xl);
      color: var(--text-primary);
    }

    .mission-pillars {
      display: flex;
      flex-direction: column;
      gap: var(--space-lg);
    }

    .pillar {
      padding: var(--space-lg);
      background: rgba(0, 255, 209, 0.05);
      border-radius: var(--radius-lg);
      border: 1px solid rgba(0, 255, 209, 0.2);
    }

    .pillar-header {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      margin-bottom: var(--space-sm);
    }

    .pillar-number {
      width: 40px;
      height: 40px;
      background: var(--accent-teal);
      color: var(--bg-primary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-family: 'Orbitron', monospace;
    }

    .circuit-board {
      position: relative;
      width: 400px;
      height: 400px;
      margin: 0 auto;
      background: radial-gradient(circle, rgba(0, 255, 209, 0.1), transparent);
      border-radius: var(--radius-lg);
    }

    .circuit-lines {
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(90deg, transparent 48%, var(--accent-teal) 49%, var(--accent-teal) 51%, transparent 52%),
        linear-gradient(0deg, transparent 48%, var(--accent-teal) 49%, var(--accent-teal) 51%, transparent 52%);
      background-size: 60px 60px;
      opacity: 0.3;
      animation: circuit-flow 4s linear infinite;
    }

    .node {
      position: absolute;
      width: 8px;
      height: 8px;
      background: var(--accent-green);
      border-radius: 50%;
      box-shadow: 0 0 15px var(--accent-green);
      animation: node-pulse 2s ease-in-out infinite;
    }

    @keyframes circuit-flow {
      0% { opacity: 0.3; }
      50% { opacity: 0.6; }
      100% { opacity: 0.3; }
    }

    @keyframes node-pulse {
      0%, 100% { 
        transform: scale(1);
        box-shadow: 0 0 15px var(--accent-green);
      }
      50% { 
        transform: scale(1.3);
        box-shadow: 0 0 25px var(--accent-green);
      }
    }

    .future-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--space-lg);
      margin-top: var(--space-2xl);
    }

    .future-card {
      position: relative;
      padding: var(--space-xl);
      background: rgba(31, 31, 31, 0.8);
      border-radius: var(--radius-lg);
      border: 1px solid rgba(0, 255, 209, 0.2);
      text-align: center;
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .future-card:hover {
      transform: translateY(-8px);
      border-color: var(--accent-teal);
    }

    .card-glow {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--accent-teal), var(--accent-green));
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .future-card:hover .card-glow {
      opacity: 1;
    }

    .future-icon {
      font-size: 3rem;
      margin-bottom: var(--space-lg);
    }

    .progress-bar {
      width: 100%;
      height: 4px;
      background: rgba(0, 255, 209, 0.2);
      border-radius: 2px;
      margin: var(--space-md) 0 var(--space-sm);
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--accent-teal), var(--accent-green));
      transition: width 2s ease-out;
      animation: progress-glow 2s ease-in-out infinite;
    }

    @keyframes progress-glow {
      0%, 100% { box-shadow: 0 0 5px var(--accent-teal); }
      50% { box-shadow: 0 0 15px var(--accent-teal); }
    }

    .progress-text {
      font-size: 0.9rem;
      color: var(--accent-teal);
      font-family: 'Orbitron', monospace;
    }

    @media (max-width: 768px) {
      .split-layout {
        grid-template-columns: 1fr;
        gap: var(--space-2xl);
      }

      .split-layout.reverse .mission-content,
      .split-layout.reverse .mission-visual {
        order: unset;
      }

      .holographic-display,
      .circuit-board {
        width: 300px;
        height: 300px;
      }

      .section-title {
        font-size: 2rem;
      }
    }
  `]
})
export class VisionComponent {
  visionPoints = [
    {
      icon: '🌟',
      title: 'Innovation Excellence',
      description: 'Leading breakthrough technologies that reshape industries and create new possibilities.'
    },
    {
      icon: '🌍',
      title: 'Global Impact',
      description: 'Developing solutions that address worldwide challenges and improve quality of life.'
    },
    {
      icon: '🚀',
      title: 'Future-Ready',
      description: 'Building technologies today that will power tomorrow\'s digital transformation.'
    }
  ];

  missionPillars = [
    {
      number: '01',
      title: 'Innovative Solutions',
      description: 'Creating cutting-edge technology solutions that push the boundaries of what\'s possible.'
    },
    {
      number: '02',
      title: 'Human-Centered Design',
      description: 'Placing user experience and human needs at the center of every innovation we create.'
    },
    {
      number: '03',
      title: 'Sustainable Future',
      description: 'Developing technologies that contribute to a sustainable and environmentally conscious future.'
    }
  ];

  circuitNodes = [
    { x: 20, y: 20 }, { x: 80, y: 30 }, { x: 60, y: 60 },
    { x: 30, y: 80 }, { x: 70, y: 85 }, { x: 15, y: 50 },
    { x: 85, y: 15 }, { x: 45, y: 40 }, { x: 25, y: 65 }
  ];

  futureAreas = [
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Advanced artificial intelligence systems that learn and adapt to solve complex problems.',
      progress: 85
    },
    {
      icon: '🔗',
      title: 'IoT Integration',
      description: 'Seamless connectivity between devices creating intelligent ecosystems.',
      progress: 75
    },
    {
      icon: '🛡️',
      title: 'Cybersecurity',
      description: 'Next-generation security solutions protecting digital assets and privacy.',
      progress: 90
    },
    {
      icon: '⚡',
      title: 'Edge Computing',
      description: 'Bringing computation closer to data sources for faster, more efficient processing.',
      progress: 70
    }
  ];
}