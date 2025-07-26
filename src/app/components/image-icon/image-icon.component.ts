import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="image-icon" [ngClass]="size">
      <div class="icon-container" [style.background-color]="backgroundColor">
        <div class="icon-inner" [ngStyle]="{'background-image': 'url(' + getIconPath() + ')'}"></div>
      </div>
    </div>
  `,
  styles: [`
    .image-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    
    .icon-container {
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 255, 209, 0.1);
      position: relative;
      overflow: hidden;
    }
    
    .icon-inner {
      background-size: 60%;
      background-position: center;
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
      transition: transform 0.3s ease;
    }
    
    .image-icon:hover .icon-inner {
      transform: scale(1.1);
    }
    
    .small .icon-container {
      width: 30px;
      height: 30px;
    }
    
    .medium .icon-container {
      width: 50px;
      height: 50px;
    }
    
    .large .icon-container {
      width: 80px;
      height: 80px;
    }
    
    .feature-icon .icon-container {
      width: 80px;
      height: 80px;
      background: linear-gradient(45deg, var(--accent-teal), var(--accent-green));
    }
    
    .feature-icon .icon-inner {
      background-size: 50%;
      filter: brightness(0) invert(1);
    }
  `]
})
export class ImageIconComponent {
  @Input() icon: string = '';
  @Input() size: 'small' | 'medium' | 'large' | 'feature-icon' = 'medium';
  @Input() backgroundColor: string = '';

  // Map emojis to icon file names
  private iconMap: {[key: string]: string} = {
    '🚀': 'rocket.svg',
    '🧠': 'brain.svg',
    '🔧': 'wrench.svg',
    '🎯': 'target.svg',
    '🌐': 'globe.svg',
    '🤝': 'handshake.svg',
    '📈': 'growth.svg',
    '🔒': 'lock.svg',
    '📚': 'book.svg',
    '🎓': 'graduation.svg',
    '🎨': 'palette.svg',
    '🎭': 'mask.svg',
    '💼': 'briefcase.svg',
    '🐦': 'twitter.svg',
    '💻': 'computer.svg',
    '📢': 'megaphone.svg'
  };

  getIconPath(): string {
    // Return the path to the icon file
    const iconFile = this.iconMap[this.icon] || 'default.svg';
    return `assets/images/${iconFile}`;
  }
} 