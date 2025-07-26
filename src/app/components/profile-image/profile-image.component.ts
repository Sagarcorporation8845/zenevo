import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="profile-container">
      <div class="hologram-frame">
        <div class="hologram-lines"></div>
        <div class="profile-avatar">
          <div class="avatar-image" *ngIf="imageUrl" [style.background-image]="'url(' + imageUrl + ')'"></div>
          <div class="avatar-placeholder" *ngIf="!imageUrl">
            <span class="avatar-initials">{{ initials }}</span>
          </div>
          <div class="hologram-effect"></div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .profile-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .hologram-frame {
      position: relative;
      width: 120px;
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .hologram-lines {
      position: absolute;
      inset: 0;
      background-image: 
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(0, 255, 209, 0.1) 2px,
          rgba(0, 255, 209, 0.1) 4px
        );
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.3s ease;
      animation: hologram-scan 2s linear infinite;
    }
    
    .profile-container:hover .hologram-lines {
      opacity: 1;
    }
    
    @keyframes hologram-scan {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100%); }
    }
    
    .profile-avatar {
      position: relative;
      width: 100%;
      height: 100%;
    }
    
    .avatar-image {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-size: cover;
      background-position: center;
      border: 3px solid rgba(0, 255, 209, 0.5);
      transition: all 0.3s ease;
    }
    
    .avatar-placeholder {
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, var(--accent-teal), var(--accent-green));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: 700;
      color: var(--bg-primary);
      border: 3px solid rgba(0, 255, 209, 0.5);
      transition: all 0.3s ease;
    }
    
    .profile-container:hover .avatar-image,
    .profile-container:hover .avatar-placeholder {
      box-shadow: 0 0 30px var(--accent-teal);
      transform: scale(1.1);
    }
    
    .hologram-effect {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      background: linear-gradient(45deg, transparent, rgba(0, 255, 209, 0.3), transparent);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .profile-container:hover .hologram-effect {
      opacity: 1;
      animation: rotate 2s linear infinite;
    }
    
    @keyframes rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `]
})
export class ProfileImageComponent {
  @Input() imageUrl?: string;
  @Input() initials: string = '';
} 