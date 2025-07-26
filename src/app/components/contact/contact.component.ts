import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="contact-hero section">
      <div class="container">
        <div class="hero-content text-center">
          <h1 class="section-title">Connect With Zenevo</h1>
          <p class="section-subtitle">Ready to innovate together? Let's start the conversation.</p>
        </div>
      </div>
    </section>

    <section class="contact-main section">
      <div class="container">
        <div class="contact-layout">
          <div class="contact-form-section">
            <div class="form-header">
              <h2>Send Message</h2>
              <p>Tell us about your project or inquiry</p>
            </div>
            <form class="neon-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" 
                         [(ngModel)]="formData.firstName" required>
                  <div class="field-glow"></div>
                </div>
                <div class="form-group">
                  <label for="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" 
                         [(ngModel)]="formData.lastName" required>
                  <div class="field-glow"></div>
                </div>
              </div>
              
              <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" 
                       [(ngModel)]="formData.email" required>
                <div class="field-glow"></div>
              </div>
              
              <div class="form-group">
                <label for="company">Company/Organization</label>
                <input type="text" id="company" name="company" 
                       [(ngModel)]="formData.company">
                <div class="field-glow"></div>
              </div>
              
              <div class="form-group">
                <label for="inquiryType">Inquiry Type</label>
                <select id="inquiryType" name="inquiryType" 
                        [(ngModel)]="formData.inquiryType" required>
                  <option value="">Select inquiry type</option>
                  <option value="product">Product Information</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="support">Technical Support</option>
                  <option value="general">General Inquiry</option>
                  <option value="investment">Investment Inquiry</option>
                </select>
                <div class="field-glow"></div>
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="6" 
                          [(ngModel)]="formData.message" required
                          placeholder="Tell us about your project, requirements, or questions..."></textarea>
                <div class="field-glow"></div>
              </div>
              
              <div class="form-group checkbox-group">
                <label class="checkbox-label">
                  <input type="checkbox" name="newsletter" 
                         [(ngModel)]="formData.newsletter">
                  <span class="checkmark"></span>
                  Subscribe to Zenevo Innovation updates and newsletters
                </label>
              </div>
              
              <div class="form-actions">
                <button type="submit" class="btn btn-primary" 
                        [disabled]="!contactForm.form.valid">
                  <span class="btn-text">Send Message</span>
                  <span class="btn-icon">⚡</span>
                </button>
              </div>
            </form>
          </div>
          
          <div class="contact-info-section">
            <div class="info-card">
              <h3>Get in Touch</h3>
              <div class="contact-methods">
                <div class="contact-item" *ngFor="let method of contactMethods">
                  <div class="contact-icon">{{ method.icon }}</div>
                  <div class="contact-details">
                    <div class="contact-label">{{ method.label }}</div>
                    <div class="contact-value">{{ method.value }}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="info-card">
              <h3>Office Locations</h3>
              <div class="office-list">
                <div class="office-item" *ngFor="let office of offices">
                  <div class="office-name">{{ office.name }}</div>
                  <div class="office-address">{{ office.address }}</div>
                  <div class="office-status" [class.online]="office.status === 'online'">
                    {{ office.status }}
                  </div>
                </div>
              </div>
            </div>
            
            <div class="info-card">
              <h3>Response Times</h3>
              <div class="response-times">
                <div class="response-item" *ngFor="let response of responseTimes">
                  <div class="response-type">{{ response.type }}</div>
                  <div class="response-time">{{ response.time }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="map-section">
      <div class="map-container">
        <div class="map-overlay">
          <div class="map-info">
            <h3>Global Presence</h3>
            <p>Innovation centers worldwide</p>
          </div>
        </div>
        <div class="interactive-map">
          <div class="map-point" *ngFor="let point of mapPoints" 
               [style.left.%]="point.x" [style.top.%]="point.y"
               [attr.title]="point.location">
            <div class="point-pulse"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="faq-section section">
      <div class="container">
        <h2 class="section-title text-center">Frequently Asked Questions</h2>
        <div class="faq-list">
          <div class="faq-item" *ngFor="let faq of faqs; let i = index">
            <div class="faq-question" (click)="toggleFaq(i)" 
                 [class.active]="activeFaq === i">
              <span>{{ faq.question }}</span>
              <span class="faq-icon">{{ activeFaq === i ? '−' : '+' }}</span>
            </div>
            <div class="faq-answer" [class.open]="activeFaq === i">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-hero {
      background: linear-gradient(135deg, rgba(0, 255, 209, 0.1), rgba(18, 225, 147, 0.1));
    }

    .contact-layout {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: var(--space-3xl);
      align-items: flex-start;
    }

    .contact-form-section {
      background: rgba(31, 31, 31, 0.8);
      border-radius: var(--radius-xl);
      padding: var(--space-2xl);
      border: 1px solid rgba(0, 255, 209, 0.2);
    }

    .form-header {
      text-align: center;
      margin-bottom: var(--space-2xl);
    }

    .form-header h2 {
      margin-bottom: var(--space-sm);
    }

    .form-header p {
      color: var(--text-secondary);
    }

    .neon-form {
      display: flex;
      flex-direction: column;
      gap: var(--space-lg);
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-lg);
    }

    .form-group {
      position: relative;
    }

    .form-group label {
      display: block;
      color: var(--accent-teal);
      font-weight: 500;
      margin-bottom: var(--space-sm);
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      background: rgba(0, 0, 0, 0.6);
      border: 1px solid rgba(0, 255, 209, 0.3);
      border-radius: var(--radius-sm);
      padding: var(--space-md);
      color: var(--text-primary);
      font-size: 1rem;
      transition: all 0.3s ease;
      position: relative;
      z-index: 2;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--accent-teal);
    }

    .form-group input:focus + .field-glow,
    .form-group select:focus + .field-glow,
    .form-group textarea:focus + .field-glow {
      opacity: 1;
      animation: glow-pulse 2s ease-in-out infinite;
    }

    .field-glow {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: var(--radius-sm);
      box-shadow: 0 0 20px rgba(0, 255, 209, 0.5);
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 1;
      pointer-events: none;
    }

    @keyframes glow-pulse {
      0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 209, 0.5); }
      50% { box-shadow: 0 0 30px rgba(0, 255, 209, 0.8); }
    }

    .checkbox-group {
      margin-top: var(--space-lg);
    }

    .checkbox-label {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      cursor: pointer;
      color: var(--text-secondary);
      font-size: 0.9rem;
    }

    .checkbox-label input[type="checkbox"] {
      display: none;
    }

    .checkmark {
      width: 20px;
      height: 20px;
      border: 2px solid var(--accent-teal);
      border-radius: var(--radius-sm);
      position: relative;
      transition: all 0.3s ease;
    }

    .checkbox-label input:checked + .checkmark {
      background: var(--accent-teal);
    }

    .checkbox-label input:checked + .checkmark::after {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: var(--bg-primary);
      font-weight: 700;
      font-size: 0.8rem;
    }

    .form-actions {
      margin-top: var(--space-xl);
      text-align: center;
    }

    .btn {
      position: relative;
      overflow: hidden;
      min-width: 200px;
    }

    .btn-text {
      position: relative;
      z-index: 2;
    }

    .btn-icon {
      margin-left: var(--space-sm);
      font-size: 1.2rem;
    }

    .contact-info-section {
      display: flex;
      flex-direction: column;
      gap: var(--space-lg);
    }

    .info-card {
      background: rgba(31, 31, 31, 0.6);
      border-radius: var(--radius-lg);
      padding: var(--space-xl);
      border: 1px solid rgba(0, 255, 209, 0.2);
      transition: all 0.3s ease;
    }

    .info-card:hover {
      border-color: var(--accent-teal);
      transform: translateY(-4px);
    }

    .info-card h3 {
      color: var(--accent-teal);
      margin-bottom: var(--space-lg);
      font-size: 1.3rem;
    }

    .contact-methods {
      display: flex;
      flex-direction: column;
      gap: var(--space-lg);
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: var(--space-md);
    }

    .contact-icon {
      width: 40px;
      height: 40px;
      background: rgba(0, 255, 209, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
    }

    .contact-label {
      font-size: 0.9rem;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .contact-value {
      font-weight: 500;
      color: var(--text-primary);
    }

    .office-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-lg);
    }

    .office-item {
      padding: var(--space-md);
      background: rgba(0, 255, 209, 0.05);
      border-radius: var(--radius-sm);
      border-left: 3px solid var(--accent-teal);
    }

    .office-name {
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: var(--space-xs);
    }

    .office-address {
      font-size: 0.9rem;
      color: var(--text-secondary);
      margin-bottom: var(--space-xs);
    }

    .office-status {
      font-size: 0.8rem;
      text-transform: uppercase;
      font-weight: 500;
      color: var(--accent-green);
    }

    .office-status.online {
      color: var(--accent-green);
    }

    .response-times {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
    }

    .response-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--space-sm) 0;
      border-bottom: 1px solid rgba(0, 255, 209, 0.1);
    }

    .response-type {
      color: var(--text-secondary);
      font-size: 0.9rem;
    }

    .response-time {
      color: var(--accent-teal);
      font-weight: 600;
      font-family: 'Orbitron', monospace;
    }

    .map-section {
      background: var(--bg-secondary);
      position: relative;
      min-height: 400px;
      overflow: hidden;
    }

    .map-container {
      position: relative;
      width: 100%;
      height: 400px;
      background: linear-gradient(45deg, rgba(0, 255, 209, 0.1), rgba(18, 225, 147, 0.1));
    }

    .map-overlay {
      position: absolute;
      top: var(--space-xl);
      left: var(--space-xl);
      z-index: 2;
    }

    .map-info {
      background: rgba(15, 15, 15, 0.9);
      padding: var(--space-lg);
      border-radius: var(--radius-lg);
      border: 1px solid var(--accent-teal);
    }

    .map-info h3 {
      color: var(--accent-teal);
      margin-bottom: var(--space-sm);
    }

    .interactive-map {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .map-point {
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--accent-teal);
      cursor: pointer;
      animation: point-pulse 2s ease-in-out infinite;
    }

    .point-pulse {
      position: absolute;
      inset: -10px;
      border: 2px solid var(--accent-teal);
      border-radius: 50%;
      animation: pulse-ring 2s ease-out infinite;
    }

    @keyframes point-pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.2); }
    }

    @keyframes pulse-ring {
      0% {
        transform: scale(0.8);
        opacity: 1;
      }
      100% {
        transform: scale(2);
        opacity: 0;
      }
    }

    .faq-section {
      background: rgba(18, 225, 147, 0.02);
    }

    .faq-list {
      max-width: 800px;
      margin: var(--space-2xl) auto 0;
    }

    .faq-item {
      margin-bottom: var(--space-lg);
      background: rgba(31, 31, 31, 0.6);
      border-radius: var(--radius-lg);
      border: 1px solid rgba(0, 255, 209, 0.2);
      overflow: hidden;
    }

    .faq-question {
      padding: var(--space-lg);
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.3s ease;
      font-weight: 500;
    }

    .faq-question:hover,
    .faq-question.active {
      background: rgba(0, 255, 209, 0.05);
      color: var(--accent-teal);
    }

    .faq-icon {
      font-size: 1.5rem;
      font-weight: 300;
      color: var(--accent-teal);
    }

    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }

    .faq-answer.open {
      max-height: 200px;
    }

    .faq-answer p {
      padding: 0 var(--space-lg) var(--space-lg);
      color: var(--text-secondary);
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .contact-layout {
        grid-template-columns: 1fr;
        gap: var(--space-2xl);
      }

      .form-row {
        grid-template-columns: 1fr;
      }

      .map-overlay {
        position: static;
        padding: var(--space-lg);
        text-align: center;
      }

      .btn {
        width: 100%;
      }
    }
  `]
})
export class ContactComponent {
  activeFaq: number | null = null;

  formData = {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    inquiryType: '',
    message: '',
    newsletter: false
  };

  contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'contact@zenevo-innovation.com'
    },
    {
      icon: '📞',
      label: 'Phone',
      value: '+1 (555) 123-ZENO'
    },
    {
      icon: '💬',
      label: 'Live Chat',
      value: 'Available 24/7'
    },
    {
      icon: '🌐',
      label: 'Social',
      value: 'Follow @ZenevoInnovation'
    }
  ];

  offices = [
    {
      name: 'Innovation HQ',
      address: 'Silicon Valley, CA',
      status: 'online'
    },
    {
      name: 'R&D Center',
      address: 'Austin, TX',
      status: 'online'
    },
    {
      name: 'Global Office',
      address: 'London, UK',
      status: 'online'
    }
  ];

  responseTimes = [
    { type: 'General Inquiry', time: '< 24h' },
    { type: 'Technical Support', time: '< 4h' },
    { type: 'Partnership', time: '< 48h' },
    { type: 'Investment', time: '< 72h' }
  ];

  mapPoints = [
    { x: 15, y: 40, location: 'Silicon Valley, CA' },
    { x: 25, y: 45, location: 'Austin, TX' },
    { x: 50, y: 25, location: 'London, UK' },
    { x: 75, y: 35, location: 'Singapore' },
    { x: 85, y: 60, location: 'Sydney, AU' }
  ];

  faqs = [
    {
      question: 'What industries does Zenevo Innovation serve?',
      answer: 'We serve a wide range of industries including healthcare, manufacturing, finance, education, and smart cities. Our technology solutions are designed to be adaptable across various sectors.'
    },
    {
      question: 'How long does it take to develop a custom solution?',
      answer: 'Development timelines vary based on project complexity. Typically, our projects range from 3-12 months. We provide detailed timelines during our consultation phase.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, maintenance, and technical support to ensure optimal performance of your solutions.'
    },
    {
      question: 'Can you integrate with existing systems?',
      answer: 'Absolutely. Our solutions are designed with integration in mind. We can seamlessly connect with most existing systems through APIs and custom integration protocols.'
    },
    {
      question: 'What makes Zenevo Innovation different?',
      answer: 'Our unique combination of cutting-edge technology, human-centered design, and rapid innovation cycles sets us apart. We focus on creating solutions that are not just advanced, but also practical and user-friendly.'
    }
  ];

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    this.resetForm();
  }

  toggleFaq(index: number) {
    this.activeFaq = this.activeFaq === index ? null : index;
  }

  private resetForm() {
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      inquiryType: '',
      message: '',
      newsletter: false
    };
  }
}