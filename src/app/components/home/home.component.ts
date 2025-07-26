import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as THREE from 'three';
import { ImageIconComponent } from '../image-icon/image-icon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ImageIconComponent],
  template: `
    <section class="hero">
      <canvas #threeCanvas class="three-canvas"></canvas>
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="title-line">ZENEVO</span>
            <span class="title-line neon-text">INNOVATION</span>
          </h1>
          <p class="hero-subtitle">Engineering Tomorrow's Technology Today</p>
          <div class="hero-buttons">
            <a routerLink="/products" class="btn btn-primary">Explore Universe</a>
            <a routerLink="/about" class="btn">Learn More</a>
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <div class="scroll-arrow"></div>
        <span>Scroll to Explore</span>
      </div>
    </section>
    
    <section class="features-preview section">
      <div class="container">
        <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
          <div class="card feature-card" *ngFor="let feature of features">
            <div class="feature-icon">
              <app-image-icon [icon]="feature.icon" size="feature-icon"></app-image-icon>
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      height: 100vh;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    
    .three-canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    
    .hero-content {
      text-align: center;
      z-index: 1;
      max-width: 800px;
      padding: 0 var(--space-md);
    }
    
    .hero-title {
      font-size: 4rem;
      font-weight: 900;
      margin-bottom: var(--space-lg);
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }
    
    .title-line {
      opacity: 0;
      transform: translateY(50px);
      animation: slideUp 1s ease-out forwards;
    }
    
    .title-line:nth-child(2) {
      animation-delay: 0.3s;
    }
    
    .hero-subtitle {
      font-size: 1.5rem;
      color: var(--text-secondary);
      margin-bottom: var(--space-2xl);
      opacity: 0;
      animation: fadeIn 1s ease-out forwards;
      animation-delay: 0.6s;
    }
    
    .hero-buttons {
      display: flex;
      gap: var(--space-lg);
      justify-content: center;
      opacity: 0;
      animation: fadeIn 1s ease-out forwards;
      animation-delay: 0.9s;
    }
    
    .scroll-indicator {
      position: absolute;
      bottom: var(--space-xl);
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      color: var(--text-secondary);
      font-size: 0.9rem;
      animation: bounce 2s infinite;
    }
    
    .scroll-arrow {
      width: 2px;
      height: 30px;
      background: var(--accent-teal);
      margin-bottom: var(--space-sm);
      position: relative;
    }
    
    .scroll-arrow::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: -3px;
      width: 8px;
      height: 8px;
      border-right: 2px solid var(--accent-teal);
      border-bottom: 2px solid var(--accent-teal);
      transform: rotate(45deg);
    }
    
    .features-preview {
      background: var(--bg-primary);
    }
    
    .feature-card {
      text-align: center;
      transition: all 0.3s ease;
    }
    
    .feature-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto var(--space-lg);
      background: linear-gradient(45deg, var(--accent-teal), var(--accent-green));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: var(--bg-primary);
    }
    
    @keyframes slideUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fadeIn {
      to {
        opacity: 1;
      }
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateX(-50%) translateY(0);
      }
      40% {
        transform: translateX(-50%) translateY(-10px);
      }
      60% {
        transform: translateX(-50%) translateY(-5px);
      }
    }
    
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }
      
      .hero-subtitle {
        font-size: 1.2rem;
      }
      
      .hero-buttons {
        flex-direction: column;
        align-items: center;
      }
    }
  `]
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('threeCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  features = [
    {
      icon: '🚀',
      title: 'Next-Gen Innovation',
      description: 'Cutting-edge technology solutions that push the boundaries of what\'s possible.'
    },
    {
      icon: '🧠',
      title: 'AI-Powered Systems',      
      description: 'Intelligent automation and machine learning solutions for the future.'
    },
    {
      icon: '🔧',
      title: 'Custom Engineering',
      description: 'Tailored hardware and software solutions designed for your specific needs.'
    }
  ];

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private particles!: THREE.Points;

  ngOnInit() {}

  ngAfterViewInit() {
    this.initThreeJS();
    this.animate();
  }

  private initThreeJS() {
    // Scene setup
    this.scene = new THREE.Scene();
    
    // Camera setup
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;

    // Renderer setup
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvasRef.nativeElement,
      alpha: true,
      antialias: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000, 0);

    // Create particle system
    this.createParticles();

    // Handle window resize
    window.addEventListener('resize', () => this.onWindowResize());
  }

  private createParticles() {
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Position
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 20;

      // Color (teal to green gradient)
      const colorChoice = Math.random();
      if (colorChoice < 0.5) {
        colors[i] = 0; // R
        colors[i + 1] = 1; // G
        colors[i + 2] = 0.82; // B (teal)
      } else {
        colors[i] = 0.07; // R
        colors[i + 1] = 0.88; // G
        colors[i + 2] = 0.58; // B (green)
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  private animate() {
    requestAnimationFrame(() => this.animate());

    // Rotate particles
    if (this.particles) {
      this.particles.rotation.x += 0.001;
      this.particles.rotation.y += 0.002;
    }

    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}