import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="products-hero section">
      <div class="container">
        <div class="hero-content text-center">
          <h1 class="section-title">Innovation Portfolio</h1>
          <p class="section-subtitle">Cutting-edge products that define the future of technology</p>
        </div>
      </div>
    </section>

    <section class="products-showcase section">
      <div class="container">
        <div class="products-grid">
          <div class="product-card" *ngFor="let product of products; let i = index"
               [class.featured]="product.featured">
            <div class="product-3d">
              <canvas #productCanvas class="product-canvas" 
                      [attr.data-index]="i"></canvas>
            </div>
            <div class="product-info">
              <div class="product-category">{{ product.category }}</div>
              <h3 class="product-title">{{ product.title }}</h3>
              <p class="product-description">{{ product.description }}</p>
              <div class="product-features">
                <div class="feature-tag" *ngFor="let feature of product.features">
                  {{ feature }}
                </div>
              </div>
              <div class="product-stats">
                <div class="stat" *ngFor="let stat of product.stats">
                  <span class="stat-value">{{ stat.value }}</span>
                  <span class="stat-label">{{ stat.label }}</span>
                </div>
              </div>
              <div class="product-actions">
                <button class="btn btn-primary">Explore Details</button>
                <button class="btn">Request Demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="tech-specs section">
      <div class="container">
        <h2 class="section-title text-center">Technical Excellence</h2>
        <div class="specs-grid">
          <div class="spec-card" *ngFor="let spec of techSpecs">
            <div class="spec-icon">{{ spec.icon }}</div>
            <h4>{{ spec.title }}</h4>
            <div class="spec-value">{{ spec.value }}</div>
            <p>{{ spec.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="innovation-lab section">
      <div class="container">
        <div class="lab-content">
          <div class="lab-info">
            <h2>Innovation Laboratory</h2>
            <p>
              Our state-of-the-art R&D facility where tomorrow's technologies take shape today. 
              Every product undergoes rigorous testing and refinement in our advanced laboratories.
            </p>
            <div class="lab-features">
              <div class="lab-feature" *ngFor="let feature of labFeatures">
                <div class="feature-icon">{{ feature.icon }}</div>
                <div class="feature-content">
                  <h4>{{ feature.title }}</h4>
                  <p>{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="lab-visual">
            <div class="lab-monitor">
              <div class="monitor-screen">
                <div class="code-lines">
                  <div class="code-line" *ngFor="let line of codeLines">{{ line }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .products-hero {
      background: linear-gradient(135deg, rgba(0, 255, 209, 0.1), rgba(18, 225, 147, 0.1));
    }

    .products-grid {
      display: grid;
      gap: var(--space-2xl);
    }

    .product-card {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-2xl);
      align-items: center;
      padding: var(--space-2xl);
      background: rgba(31, 31, 31, 0.8);
      border-radius: var(--radius-xl);
      border: 1px solid rgba(0, 255, 209, 0.2);
      margin-bottom: var(--space-3xl);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .product-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--accent-teal), var(--accent-green));
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    .product-card:hover::before {
      transform: scaleX(1);
    }

    .product-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      border-color: var(--accent-teal);
    }

    .product-card.featured {
      border: 2px solid var(--accent-teal);
      background: rgba(0, 255, 209, 0.05);
    }

    .product-card:nth-child(even) {
      grid-template-columns: 1fr 1fr;
    }

    .product-card:nth-child(even) .product-3d {
      order: 2;
    }

    .product-card:nth-child(even) .product-info {
      order: 1;
    }

    .product-3d {
      height: 400px;
      position: relative;
      border-radius: var(--radius-lg);
      overflow: hidden;
    }

    .product-canvas {
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, rgba(0, 255, 209, 0.1), transparent);
    }

    .product-category {
      color: var(--accent-teal);
      font-family: 'Orbitron', monospace;
      font-size: 0.9rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: var(--space-sm);
    }

    .product-title {
      font-size: 2rem;
      margin-bottom: var(--space-md);
      color: var(--text-primary);
    }

    .product-description {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: var(--space-lg);
      color: var(--text-secondary);
    }

    .product-features {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-sm);
      margin-bottom: var(--space-lg);
    }

    .feature-tag {
      padding: var(--space-xs) var(--space-sm);
      background: rgba(0, 255, 209, 0.1);
      border: 1px solid rgba(0, 255, 209, 0.3);
      border-radius: var(--radius-sm);
      font-size: 0.9rem;
      color: var(--accent-teal);
      font-weight: 500;
    }

    .product-stats {
      display: flex;
      gap: var(--space-lg);
      margin-bottom: var(--space-xl);
    }

    .stat {
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    .stat-value {
      font-family: 'Orbitron', monospace;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--accent-teal);
    }

    .stat-label {
      font-size: 0.9rem;
      color: var(--text-secondary);
      margin-top: var(--space-xs);
    }

    .product-actions {
      display: flex;
      gap: var(--space-md);
    }

    .specs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--space-lg);
    }

    .spec-card {
      text-align: center;
      padding: var(--space-xl);
      background: rgba(31, 31, 31, 0.8);
      border-radius: var(--radius-lg);
      border: 1px solid rgba(0, 255, 209, 0.2);
      transition: all 0.3s ease;
    }

    .spec-card:hover {
      transform: translateY(-5px);
      border-color: var(--accent-teal);
    }

    .spec-icon {
      font-size: 3rem;
      margin-bottom: var(--space-md);
    }

    .spec-value {
      font-family: 'Orbitron', monospace;
      font-size: 2rem;
      font-weight: 700;
      color: var(--accent-teal);
      margin: var(--space-md) 0;
    }

    .innovation-lab {
      background: rgba(18, 225, 147, 0.02);
    }

    .lab-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-3xl);
      align-items: center;
    }

    .lab-features {
      display: flex;
      flex-direction: column;
      gap: var(--space-lg);
      margin-top: var(--space-xl);
    }

    .lab-feature {
      display: flex;
      gap: var(--space-md);
      align-items: flex-start;
    }

    .feature-icon {
      font-size: 1.5rem;
      color: var(--accent-teal);
      min-width: 40px;
    }

    .lab-monitor {
      background: var(--bg-secondary);
      border-radius: var(--radius-lg);
      padding: var(--space-lg);
      border: 2px solid var(--accent-teal);
      position: relative;
    }

    .monitor-screen {
      background: #000;
      border-radius: var(--radius-sm);
      padding: var(--space-lg);
      font-family: 'Courier New', monospace;
      height: 300px;
      overflow: hidden;
      position: relative;
    }

    .code-lines {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    .code-line {
      color: var(--accent-green);
      font-size: 0.9rem;
      opacity: 0;
      animation: type-in 0.5s ease-out forwards;
    }

    .code-line:nth-child(1) { animation-delay: 0.5s; }
    .code-line:nth-child(2) { animation-delay: 1s; }
    .code-line:nth-child(3) { animation-delay: 1.5s; }
    .code-line:nth-child(4) { animation-delay: 2s; }
    .code-line:nth-child(5) { animation-delay: 2.5s; }

    @keyframes type-in {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @media (max-width: 768px) {
      .product-card {
        grid-template-columns: 1fr;
      }

      .product-card:nth-child(even) .product-3d,
      .product-card:nth-child(even) .product-info {
        order: unset;
      }

      .lab-content {
        grid-template-columns: 1fr;
      }

      .product-3d {
        height: 250px;
      }

      .product-actions {
        flex-direction: column;
      }
    }
  `]
})
export class ProductsComponent implements AfterViewInit {
  @ViewChild('productCanvas') canvasRefs!: ElementRef<HTMLCanvasElement>;

  products = [
    {
      category: 'IoT Solutions',
      title: 'Smart Attendance System',
      description: 'Revolutionary ESP32-based attendance tracking with biometric authentication, real-time data sync, and cloud integration.',
      features: ['Biometric Auth', 'Cloud Sync', 'Real-time Analytics', 'Mobile App'],
      stats: [
        { value: '99.9%', label: 'Accuracy' },
        { value: '< 1s', label: 'Response Time' },
        { value: '10K+', label: 'Daily Records' }
      ],
      featured: true
    },
    {
      category: 'Security Tech',
      title: 'QR Code Scanner Pro',
      description: 'Advanced QR code scanning solution with encryption, batch processing, and enterprise-grade security features.',
      features: ['Batch Processing', 'Encryption', 'Cloud Storage', 'API Integration'],
      stats: [
        { value: '1M+', label: 'Scans/Day' },
        { value: '256-bit', label: 'Encryption' },
        { value: '99.8%', label: 'Uptime' }
      ],
      featured: false
    },
    {
      category: 'AI Platform',
      title: 'Intelligent Analytics Engine',
      description: 'Machine learning-powered analytics platform that transforms raw data into actionable business insights.',
      features: ['ML Algorithms', 'Predictive Analytics', 'Custom Reports', 'API Access'],
      stats: [
        { value: '50+', label: 'ML Models' },
        { value: '10TB', label: 'Data Processed' },
        { value: '24/7', label: 'Monitoring' }
      ],
      featured: false
    }
  ];

  techSpecs = [
    {
      icon: '⚡',
      title: 'Processing Power',
      value: '10.5 TFLOPS',
      description: 'Advanced processing capabilities for real-time computations'
    },
    {
      icon: '🔒',
      title: 'Security Level',
      value: 'Military-Grade',
      description: 'Enterprise-level security with 256-bit encryption'
    },
    {
      icon: '🌐',
      title: 'Connectivity',
      value: '5G Ready',
      description: 'Future-proof connectivity with 5G integration'
    },
    {
      icon: '📊',
      title: 'Data Throughput',
      value: '1 PB/hour',
      description: 'Massive data processing and analytics capabilities'
    }
  ];

  labFeatures = [
    {
      icon: '🔬',
      title: 'Advanced Prototyping',
      description: 'Cutting-edge 3D printing and rapid prototyping facilities'
    },
    {
      icon: '🧪',
      title: 'Material Testing',
      description: 'Comprehensive testing labs for durability and performance'
    },
    {
      icon: '🤖',
      title: 'AI Development',
      description: 'Dedicated AI research and machine learning development'
    },
    {
      icon: '🔋',
      title: 'Energy Solutions',
      description: 'Sustainable energy and power optimization research'
    }
  ];

  codeLines = [
    '> Initializing Zenevo Innovation Systems...',
    '> Loading Advanced AI Algorithms...',
    '> Connecting to Quantum Processing Unit...',
    '> System Status: OPTIMAL',
    '> Ready for Innovation Protocol...'
  ];

  private scenes: THREE.Scene[] = [];
  private cameras: THREE.PerspectiveCamera[] = [];
  private renderers: THREE.WebGLRenderer[] = [];
  private cubes: THREE.Mesh[] = [];

  ngAfterViewInit() {
    this.initProductVisualization();
  }

  private initProductVisualization() {
    const canvases = document.querySelectorAll('.product-canvas') as NodeListOf<HTMLCanvasElement>;
    
    canvases.forEach((canvas, index) => {
      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
      renderer.setClearColor(0x000000, 0);

      // Create a rotating cube for each product
      const geometry = new THREE.BoxGeometry(2, 2, 2);
      const material = new THREE.MeshBasicMaterial({
        color: index % 2 === 0 ? 0x00FFD1 : 0x12E193,
        wireframe: true,
        transparent: true,
        opacity: 0.8
      });
      
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
      
      camera.position.z = 5;

      // Store references
      this.scenes.push(scene);
      this.cameras.push(camera);
      this.renderers.push(renderer);
      this.cubes.push(cube);
    });

    this.animate();
  }

  private animate() {
    requestAnimationFrame(() => this.animate());

    this.cubes.forEach((cube, index) => {
      if (cube) {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        this.renderers[index].render(this.scenes[index], this.cameras[index]);
      }
    });
  }
}