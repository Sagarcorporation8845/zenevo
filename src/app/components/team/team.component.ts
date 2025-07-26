import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileImageComponent } from '../profile-image/profile-image.component';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, ProfileImageComponent, NgIconComponent],
  template: `
    <section class="team-hero section">
      <div class="container">
        <div class="hero-content text-center">
          <h1 class="section-title">Our Visionary Team</h1>
          <p class="section-subtitle">The brilliant minds behind Zenevo Innovation's groundbreaking technologies</p>
        </div>
      </div>
    </section>

    <section class="team-grid section">
      <div class="container">
        <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
          <div class="team-card" *ngFor="let member of teamMembers" 
               (mouseenter)="onCardHover(member)" (mouseleave)="onCardLeave()">
            <app-profile-image [initials]="getInitials(member.name)" [imageUrl]="member.imageUrl"></app-profile-image>
            <div class="member-info">
              <h3 class="member-name">{{ member.name }}</h3>
              <div class="member-role">{{ member.role }}</div>
              <p class="member-bio">{{ member.bio }}</p>
              <div class="member-skills">
                <div class="skill-tag" *ngFor="let skill of member.skills">
                  {{ skill }}
                </div>
              </div>
              <div class="member-social">
                <a *ngFor="let social of member.social" 
                   [href]="social.url" class="social-link" 
                   [attr.aria-label]="social.platform">
                   <ng-icon [name]="social.icon" size="1.2rem"></ng-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="team-values section">
      <div class="container">
        <h2 class="section-title text-center">What Drives Us</h2>
        <div class="values-grid">
          <div class="value-item" *ngFor="let value of teamValues">
            <div class="value-icon">
                <ng-icon [name]="value.icon" size="3rem"></ng-icon>
            </div>
            <h4>{{ value.title }}</h4>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="join-team section">
      <div class="container">
        <div class="join-content">
          <div class="join-text">
            <h2>Join Our Mission</h2>
            <p>
              Ready to shape the future of technology? We're always looking for passionate 
              individuals who share our vision of innovation and excellence.
            </p>
            <div class="join-stats">
              <div class="stat-item" *ngFor="let stat of joinStats">
                <div class="stat-number">{{ stat.number }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </div>
            <a href="/careers" class="btn btn-primary">View Open Positions</a>
          </div>
          <div class="join-visual">
            <div class="recruitment-terminal">
              <div class="terminal-header">
                <div class="terminal-buttons">
                  <span class="btn-close"></span>
                  <span class="btn-minimize"></span>
                  <span class="btn-maximize"></span>
                </div>
                <div class="terminal-title">zenevo_recruitment.exe</div>
              </div>
              <div class="terminal-body">
                <div class="terminal-line" *ngFor="let line of terminalLines">
                  {{ line }}
                </div>
                <div class="cursor-blink">_</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .team-hero {
      background: linear-gradient(135deg, rgba(0, 255, 209, 0.1), rgba(18, 225, 147, 0.1));
    }

    .team-card {
      background: rgba(31, 31, 31, 0.8);
      border-radius: var(--radius-xl);
      padding: var(--space-xl);
      text-align: center;
      transition: all 0.4s ease;
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(0, 255, 209, 0.2);
    }

    .team-card:hover {
      transform: translateY(-12px) scale(1.02);
      border-color: var(--accent-teal);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
    }

    app-profile-image {
      display: block;
      margin-bottom: var(--space-lg);
    }

    .member-name {
      font-size: 1.5rem;
      margin-bottom: var(--space-sm);
      color: var(--text-primary);
    }

    .member-role {
      color: var(--accent-teal);
      font-family: 'Orbitron', monospace;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: var(--space-md);
      font-size: 0.9rem;
    }

    .member-bio {
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: var(--space-lg);
      color: var(--text-secondary);
    }

    .member-skills {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-xs);
      justify-content: center;
      margin-bottom: var(--space-lg);
    }

    .skill-tag {
      padding: var(--space-xs) var(--space-sm);
      background: rgba(0, 255, 209, 0.1);
      border: 1px solid rgba(0, 255, 209, 0.3);
      border-radius: var(--radius-sm);
      font-size: 0.8rem;
      color: var(--accent-teal);
      font-weight: 500;
    }

    .member-social {
      display: flex;
      gap: var(--space-md);
      justify-content: center;
    }

    .social-link {
      width: 40px;
      height: 40px;
      background: rgba(0, 255, 209, 0.1);
      border: 1px solid rgba(0, 255, 209, 0.3);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--accent-teal);
      text-decoration: none;
      transition: all 0.3s ease;
      font-size: 1.2rem;
    }

    .social-link:hover {
      background: var(--accent-teal);
      color: var(--bg-primary);
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 255, 209, 0.3);
    }

    .team-values {
      background: rgba(18, 225, 147, 0.02);
    }

    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--space-lg);
      margin-top: var(--space-2xl);
    }

    .value-item {
      text-align: center;
      padding: var(--space-xl);
      background: rgba(31, 31, 31, 0.5);
      border-radius: var(--radius-lg);
      border: 1px solid rgba(0, 255, 209, 0.2);
      transition: all 0.3s ease;
    }

    .value-item:hover {
      transform: translateY(-5px);
      border-color: var(--accent-teal);
    }

    .value-icon {
      font-size: 3rem;
      margin-bottom: var(--space-md);
      color: var(--accent-teal); /* Added color for the icon */
    }

    .join-team {
      background: linear-gradient(135deg, rgba(0, 255, 209, 0.05), rgba(18, 225, 147, 0.05));
    }

    .join-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-3xl);
      align-items: center;
    }

    .join-stats {
      display: flex;
      gap: var(--space-xl);
      margin: var(--space-xl) 0;
    }

    .stat-item {
      text-align: center;
    }

    .stat-number {
      font-family: 'Orbitron', monospace;
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--accent-teal);
    }

    .stat-label {
      font-size: 0.9rem;
      color: var(--text-secondary);
      margin-top: var(--space-xs);
    }

    .recruitment-terminal {
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
      gap: var(--space-md);
      border-bottom: 1px solid var(--accent-teal);
    }

    .terminal-buttons {
      display: flex;
      gap: var(--space-xs);
    }

    .terminal-buttons span {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }

    .btn-close { background: #ff5f57; }
    .btn-minimize { background: #ffbd2e; }
    .btn-maximize { background: #28ca42; }

    .terminal-title {
      color: var(--accent-teal);
      font-size: 0.9rem;
      font-weight: 500;
    }

    .terminal-body {
      padding: var(--space-lg);
      height: 200px;
      background: #000;
      color: var(--accent-green);
      font-size: 0.9rem;
      line-height: 1.4;
    }

    .terminal-line {
      opacity: 0;
      animation: type-in 0.5s ease-out forwards;
    }

    .terminal-line:nth-child(1) { animation-delay: 0.5s; }
    .terminal-line:nth-child(2) { animation-delay: 1s; }
    .terminal-line:nth-child(3) { animation-delay: 1.5s; }
    .terminal-line:nth-child(4) { animation-delay: 2s; }

    .cursor-blink {
      color: var(--accent-teal);
      animation: blink 1s infinite;
      margin-top: var(--space-sm);
    }

    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }

    @media (max-width: 768px) {
      .join-content {
        grid-template-columns: 1fr;
      }

      .join-stats {
        justify-content: center;
      }

      .stat-number {
        font-size: 2rem;
      }
    }
  `]
})
export class TeamComponent {
  teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Chief Technology Officer',
      bio: 'Visionary leader with 15+ years in emerging technologies, specializing in AI and quantum computing.',
      skills: ['AI/ML', 'Quantum Computing', 'Leadership', 'Innovation Strategy'],
      imageUrl: '',
      social: [
        { platform: 'LinkedIn', icon: 'phosphorBriefcase', url: '#' },
        { platform: 'Twitter', icon: 'phosphorTwitterLogo', url: '#' },
        { platform: 'GitHub', icon: 'phosphorComputerTower', url: '#' }
      ]
    },
    {
      name: 'Sarah Martinez',
      role: 'Lead AI Engineer',
      bio: 'Machine learning expert focused on developing next-generation intelligent systems and neural networks.',
      skills: ['Deep Learning', 'Neural Networks', 'Python', 'TensorFlow'],
      imageUrl: '',
      social: [
        { platform: 'LinkedIn', icon: 'phosphorBriefcase', url: '#' },
        { platform: 'GitHub', icon: 'phosphorComputerTower', url: '#' },
        { platform: 'Research', icon: 'phosphorBook', url: '#' }
      ]
    },
    {
      name: 'Marcus Johnson',
      role: 'IoT Solutions Architect',
      bio: 'Hardware and software integration specialist creating seamless IoT ecosystems.',
      skills: ['IoT', 'Embedded Systems', 'Cloud Architecture', 'Security'],
      imageUrl: '',
      social: [
        { platform: 'LinkedIn', icon: 'phosphorBriefcase', url: '#' },
        { platform: 'Twitter', icon: 'phosphorTwitterLogo', url: '#' },
        { platform: 'Portfolio', icon: 'phosphorGlobe', url: '#' }
      ]
    },
    {
      name: 'Dr. Emily Wong',
      role: 'Research Director',
      bio: 'PhD in Computer Science, leading breakthrough research in quantum algorithms and cryptography.',
      skills: ['Quantum Algorithms', 'Cryptography', 'Research', 'Publications'],
      imageUrl: '',
      social: [
        { platform: 'LinkedIn', icon: 'phosphorBriefcase', url: '#' },
        { platform: 'Research', icon: 'phosphorBook', url: '#' },
        { platform: 'Academia', icon: 'phosphorGraduationCap', url: '#' }
      ]
    },
    {
      name: 'David Kim',
      role: 'UX Innovation Lead',
      bio: 'Human-centered design expert creating intuitive interfaces for complex technological solutions.',
      skills: ['UX Design', 'Prototyping', 'User Research', 'Innovation'],
      imageUrl: '',
      social: [
        { platform: 'LinkedIn', icon: 'phosphorBriefcase', url: '#' },
        { platform: 'Dribbble', icon: 'phosphorPalette', url: '#' },
        { platform: 'Behance', icon: 'phosphorMask', url: '#' }
      ]
    },
    {
      name: 'Lisa Thompson',
      role: 'Cybersecurity Chief',
      bio: 'Expert in advanced cybersecurity protocols and ethical hacking with government consulting experience.',
      skills: ['Cybersecurity', 'Ethical Hacking', 'Compliance', 'Risk Management'],
      imageUrl: '',
      social: [
        { platform: 'LinkedIn', icon: 'phosphorBriefcase', url: '#' },
        { platform: 'Security Blog', icon: 'phosphorLock', url: '#' },
        { platform: 'Conferences', icon: 'phosphorMegaphone', url: '#' }
      ]
    }
  ];

  teamValues = [
    {
      icon: 'phosphorRocket',
      title: 'Innovation Excellence',
      description: 'We constantly push boundaries and explore new possibilities in technology.'
    },
    {
      icon: 'phosphorHandshake',
      title: 'Collaborative Spirit',
      description: 'Our diverse team works together to achieve extraordinary results.'
    },
    {
      icon: 'phosphorTarget',
      title: 'Mission-Driven',
      description: 'Every team member is committed to our vision of technological advancement.'
    },
    {
      icon: 'phosphorChartLineUp',
      title: 'Continuous Growth',
      description: 'We invest in our team\'s development and encourage lifelong learning.'
    }
  ];

  joinStats = [
    { number: '15+', label: 'Team Members' },
    { number: '50+', label: 'Projects Delivered' },
    { number: '24/7', label: 'Innovation Mode' }
  ];

  terminalLines = [
    '> Scanning for exceptional talent...',
    '> Analyzing innovation potential...',
    '> Matching skills with opportunities...',
    '> Ready to change the world? Join us!'
  ];

  getInitials(name: string): string {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  }

  onCardHover(member: any) {
    // Add hover sound effect or animation trigger here
  }

  onCardLeave() {
    // Reset hover state
  }
}