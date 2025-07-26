import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="careers-hero section">
      <div class="container">
        <div class="hero-content text-center">
          <h1 class="section-title">Join the Future</h1>
          <p class="section-subtitle">Shape tomorrow's technology with Zenevo Innovation</p>
        </div>
      </div>
    </section>

    <section class="terminal-interface section">
      <div class="container">
        <div class="terminal-window">
          <div class="terminal-header">
            <div class="terminal-controls">
              <span class="control-btn close"></span>
              <span class="control-btn minimize"></span>
              <span class="control-btn maximize"></span>
            </div>
            <div class="terminal-title">zenevo_careers.exe</div>
          </div>
          <div class="terminal-body">
            <div class="terminal-content">
              <div class="command-line">
                <span class="prompt">zenevo&#64;careers:~$</span>
                <span class="command">list --open-positions</span>
              </div>
              <div class="job-listings">
                <div class="job-entry" *ngFor="let job of openPositions; let i = index"
                     [class.highlighted]="highlightedJob === i"
                     (click)="selectJob(i)">
                  <div class="job-header">
                    <span class="job-id">[{{ job.id }}]</span>
                    <span class="job-title">{{ job.title }}</span>
                    <span class="job-level">{{ job.level }}</span>
                  </div>
                  <div class="job-details" *ngIf="selectedJob === i">
                    <div class="job-description">{{ job.description }}</div>
                    <div class="job-requirements">
                      <div class="req-title">REQUIREMENTS:</div>
                      <ul>
                        <li *ngFor="let req of job.requirements">{{ req }}</li>
                      </ul>
                    </div>
                    <div class="job-benefits">
                      <div class="benefit-title">BENEFITS:</div>
                      <div class="benefits-grid">
                        <span class="benefit-tag" *ngFor="let benefit of job.benefits">
                          {{ benefit }}
                        </span>
                      </div>
                    </div>
                    <div class="job-actions">
                      <button class="terminal-btn" (click)="applyForJob(job)">APPLY_NOW</button>
                      <button class="terminal-btn secondary" (click)="learnMore(job)">LEARN_MORE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="application-form section" *ngIf="showApplicationForm">
      <div class="container">
        <div class="form-container">
          <div class="form-header">
            <h2>Application Portal</h2>
            <p>Applying for: <span class="position-name">{{ selectedPosition?.title }}</span></p>
          </div>
          <form class="cyber-form" (ngSubmit)="submitApplication()" #applicationForm="ngForm">
            <div class="form-group">
              <label for="fullName">Full Name</label>
              <input type="text" id="fullName" name="fullName" 
                     [(ngModel)]="applicationData.fullName" required>
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" 
                     [(ngModel)]="applicationData.email" required>
            </div>
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" 
                     [(ngModel)]="applicationData.phone" required>
            </div>
            <div class="form-group">
              <label for="experience">Years of Experience</label>
              <select id="experience" name="experience" 
                      [(ngModel)]="applicationData.experience" required>
                <option value="">Select Experience Level</option>
                <option value="0-2">0-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>
            <div class="form-group">
              <label for="resume">Resume Upload</label>
              <div class="file-upload">
                <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx">
                <div class="upload-area">
                  <div class="upload-icon">📄</div>
                  <div class="upload-text">Drag & Drop or Click to Upload</div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="coverLetter">Why Zenevo Innovation?</label>
              <textarea id="coverLetter" name="coverLetter" rows="5" 
                        [(ngModel)]="applicationData.coverLetter" 
                        placeholder="Tell us why you want to join our mission..."></textarea>
            </div>
            <div class="form-actions">
              <button type="submit" class="btn btn-primary" [disabled]="!applicationForm.form.valid">
                Submit Application
              </button>
              <button type="button" class="btn" (click)="closeApplicationForm()">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <section class="culture-section section">
      <div class="container">
        <h2 class="section-title text-center">Life at Zenevo</h2>
        <div class="culture-grid">
          <div class="culture-card" *ngFor="let item of cultureItems">
            <div class="culture-icon">{{ item.icon }}</div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .careers-hero {
      background: linear-gradient(135deg, rgba(0, 255, 209, 0.1), rgba(18, 225, 147, 0.1));
    }

    .terminal-interface {
      padding: var(--space-3xl) 0;
    }

    .terminal-window {
      max-width: 900px;
      margin: 0 auto;
      background: var(--bg-secondary);
      border-radius: var(--radius-lg);
      border: 2px solid var(--accent-teal);
      overflow: hidden;
      font-family: 'Courier New', monospace;
    }

    .terminal-header {
      background: rgba(0, 255, 209, 0.1);
      padding: var(--space-md);
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid var(--accent-teal);
    }

    .terminal-controls {
      display: flex;
      gap: var(--space-xs);
    }

    .control-btn {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }

    .control-btn.close { background: #ff5f57; }
    .control-btn.minimize { background: #ffbd2e; }
    .control-btn.maximize { background: #28ca42; }

    .terminal-title {
      color: var(--accent-teal);
      font-weight: 500;
    }

    .terminal-body {
      background: #000;
      padding: var(--space-lg);
      min-height: 400px;
      color: var(--accent-green);
      font-size: 0.9rem;
    }

    .command-line {
      margin-bottom: var(--space-lg);
      font-size: 1rem;
    }

    .prompt {
      color: var(--accent-teal);
      font-weight: 700;
    }

    .command {
      color: var(--accent-green);
      margin-left: var(--space-sm);
    }

    .job-listings {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
    }

    .job-entry {
      border: 1px solid rgba(0, 255, 209, 0.3);
      border-radius: var(--radius-sm);
      padding: var(--space-md);
      cursor: pointer;
      transition: all 0.3s ease;
      background: rgba(0, 255, 209, 0.05);
    }

    .job-entry:hover,
    .job-entry.highlighted {
      background: rgba(0, 255, 209, 0.1);
      border-color: var(--accent-teal);
      transform: translateX(4px);
    }

    .job-header {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      margin-bottom: var(--space-sm);
    }

    .job-id {
      color: var(--accent-teal);
      font-weight: 700;
      min-width: 60px;
    }

    .job-title {
      color: var(--text-primary);
      font-weight: 600;
      flex: 1;
    }

    .job-level {
      color: var(--accent-green);
      font-size: 0.8rem;
      padding: var(--space-xs) var(--space-sm);
      background: rgba(18, 225, 147, 0.1);
      border-radius: var(--radius-sm);
    }

    .job-details {
      padding-top: var(--space-md);
      border-top: 1px solid rgba(0, 255, 209, 0.2);
      animation: slideDown 0.3s ease-out;
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .job-description {
      margin-bottom: var(--space-lg);
      line-height: 1.6;
      color: var(--text-secondary);
    }

    .req-title,
    .benefit-title {
      color: var(--accent-teal);
      font-weight: 700;
      margin-bottom: var(--space-sm);
    }

    .job-requirements ul {
      list-style: none;
      padding-left: 0;
      margin-bottom: var(--space-lg);
    }

    .job-requirements li {
      position: relative;
      padding-left: var(--space-lg);
      margin-bottom: var(--space-xs);
      color: var(--text-secondary);
    }

    .job-requirements li::before {
      content: '>';
      position: absolute;
      left: 0;
      color: var(--accent-teal);
      font-weight: 700;
    }

    .benefits-grid {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-xs);
      margin-bottom: var(--space-lg);
    }

    .benefit-tag {
      padding: var(--space-xs) var(--space-sm);
      background: rgba(18, 225, 147, 0.1);
      border: 1px solid rgba(18, 225, 147, 0.3);
      border-radius: var(--radius-sm);
      font-size: 0.8rem;
      color: var(--accent-green);
    }

    .job-actions {
      display: flex;
      gap: var(--space-md);
    }

    .terminal-btn {
      padding: var(--space-sm) var(--space-lg);
      background: transparent;
      border: 1px solid var(--accent-teal);
      color: var(--accent-teal);
      font-family: 'Courier New', monospace;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: uppercase;
    }

    .terminal-btn:hover {
      background: var(--accent-teal);
      color: var(--bg-primary);
    }

    .terminal-btn.secondary {
      border-color: var(--accent-green);
      color: var(--accent-green);
    }

    .terminal-btn.secondary:hover {
      background: var(--accent-green);
      color: var(--bg-primary);
    }

    .application-form {
      background: rgba(18, 225, 147, 0.02);
    }

    .form-container {
      max-width: 700px;
      margin: 0 auto;
      background: rgba(31, 31, 31, 0.8);
      border-radius: var(--radius-xl);
      padding: var(--space-2xl);
      border: 1px solid rgba(0, 255, 209, 0.2);
    }

    .form-header {
      text-align: center;
      margin-bottom: var(--space-2xl);
    }

    .position-name {
      color: var(--accent-teal);
      font-weight: 600;
    }

    .cyber-form {
      display: flex;
      flex-direction: column;
      gap: var(--space-lg);
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    .form-group label {
      color: var(--accent-teal);
      font-weight: 500;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
      background: rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(0, 255, 209, 0.3);
      border-radius: var(--radius-sm);
      padding: var(--space-md);
      color: var(--text-primary);
      font-size: 1rem;
      transition: all 0.3s ease;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--accent-teal);
      box-shadow: 0 0 10px rgba(0, 255, 209, 0.3);
    }

    .file-upload {
      position: relative;
    }

    .file-upload input[type="file"] {
      position: absolute;
      opacity: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }

    .upload-area {
      border: 2px dashed rgba(0, 255, 209, 0.3);
      border-radius: var(--radius-lg);
      padding: var(--space-2xl);
      text-align: center;
      transition: all 0.3s ease;
    }

    .upload-area:hover {
      border-color: var(--accent-teal);
      background: rgba(0, 255, 209, 0.05);
    }

    .upload-icon {
      font-size: 3rem;
      margin-bottom: var(--space-md);
    }

    .upload-text {
      color: var(--text-secondary);
    }

    .form-actions {
      display: flex;
      gap: var(--space-md);
      justify-content: center;
      margin-top: var(--space-xl);
    }

    .culture-section {
      background: var(--bg-primary);
    }

    .culture-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--space-lg);
      margin-top: var(--space-2xl);
    }

    .culture-card {
      text-align: center;
      padding: var(--space-xl);
      background: rgba(31, 31, 31, 0.5);
      border-radius: var(--radius-lg);
      border: 1px solid rgba(0, 255, 209, 0.2);
      transition: all 0.3s ease;
    }

    .culture-card:hover {
      transform: translateY(-5px);
      border-color: var(--accent-teal);
    }

    .culture-icon {
      font-size: 3rem;
      margin-bottom: var(--space-lg);
    }

    @media (max-width: 768px) {
      .terminal-window {
        margin: 0 var(--space-md);
      }

      .job-header {
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-sm);
      }

      .job-actions {
        flex-direction: column;
      }

      .form-actions {
        flex-direction: column;
      }
    }
  `]
})
export class CareersComponent {
  selectedJob: number | null = null;
  highlightedJob: number | null = null;
  showApplicationForm = false;
  selectedPosition: any = null;

  applicationData = {
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: ''
  };

  openPositions = [
    {
      id: 'AI001',
      title: 'Senior AI Engineer',
      level: 'SENIOR',
      description: 'Lead the development of next-generation AI systems and machine learning algorithms that will power our innovative products.',
      requirements: [
        '5+ years of experience in AI/ML development',
        'Expert knowledge of TensorFlow, PyTorch, or similar frameworks',
        'Strong background in deep learning and neural networks',
        'Experience with distributed computing and cloud platforms',
        'PhD in Computer Science, AI, or related field preferred'
      ],
      benefits: ['Competitive Salary', 'Equity Package', 'Health Insurance', 'Learning Budget', 'Flexible Hours', 'Remote Work']
    },
    {
      id: 'IOT002',
      title: 'IoT Solutions Architect',
      level: 'SENIOR',
      description: 'Design and implement scalable IoT ecosystems that connect the physical and digital worlds seamlessly.',
      requirements: [
        '4+ years of IoT development experience',
        'Expertise in embedded systems and microcontrollers',
        'Strong knowledge of networking protocols and security',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Bachelor\'s degree in Engineering or Computer Science'
      ],
      benefits: ['Stock Options', 'Health Coverage', 'Tech Allowance', 'Conference Attendance', 'Innovation Time', 'Team Retreats']
    },
    {
      id: 'SEC003',
      title: 'Cybersecurity Specialist',
      level: 'MID-LEVEL',
      description: 'Protect our systems and customer data with advanced security protocols and threat detection systems.',
      requirements: [
        '3+ years in cybersecurity or related field',
        'Knowledge of security frameworks and compliance',
        'Experience with penetration testing and vulnerability assessment',
        'Understanding of encryption and secure coding practices',
        'Relevant security certifications preferred'
      ],
      benefits: ['Competitive Pay', 'Security Training', 'Certification Support', 'Flexible Schedule', 'Growth Path', 'Tech Gear']
    },
    {
      id: 'UX004',
      title: 'UX Innovation Designer',
      level: 'MID-LEVEL',
      description: 'Create intuitive and engaging user experiences for complex technological solutions and futuristic interfaces.',
      requirements: [
        '3+ years of UX/UI design experience',
        'Proficiency in design tools (Figma, Sketch, Adobe Creative Suite)',
        'Strong portfolio showcasing innovative design solutions',
        'Experience with user research and usability testing',
        'Understanding of emerging technologies and their UX implications'
      ],
      benefits: ['Creative Freedom', 'Design Tools', 'Health Benefits', 'Learning Opportunities', 'Flexible Work', 'Team Events']
    }
  ];

  cultureItems = [
    {
      icon: '🚀',
      title: 'Innovation First',
      description: 'We encourage bold ideas and provide the resources to bring them to life.'
    },
    {
      icon: '🌟',
      title: 'Growth Mindset',
      description: 'Continuous learning and development opportunities for every team member.'
    },
    {
      icon: '🤝',
      title: 'Collaborative Environment',
      description: 'Work with brilliant minds from diverse backgrounds and expertise.'
    },
    {
      icon: '⚡',
      title: 'Fast-Paced Impact',
      description: 'See your work make a difference in the world of technology quickly.'
    },
    {
      icon: '🎯',
      title: 'Mission-Driven',
      description: 'Be part of a team that\'s genuinely changing the future of technology.'
    },
    {
      icon: '🏆',
      title: 'Excellence Rewarded',
      description: 'Recognition, competitive compensation, and career advancement for top performers.'
    }
  ];

  selectJob(index: number) {
    this.selectedJob = this.selectedJob === index ? null : index;
  }

  applyForJob(job: any) {
    this.selectedPosition = job;
    this.showApplicationForm = true;
  }

  learnMore(job: any) {
    // Could open a modal with more detailed job information
    console.log('Learn more about:', job.title);
  }

  submitApplication() {
    console.log('Application submitted:', this.applicationData);
    // Here you would typically send the data to your backend
    alert('Application submitted successfully! We\'ll be in touch soon.');
    this.closeApplicationForm();
  }

  closeApplicationForm() {
    this.showApplicationForm = false;
    this.selectedPosition = null;
    this.applicationData = {
      fullName: '',
      email: '',
      phone: '',
      experience: '',
      coverLetter: ''
    };
  }
}