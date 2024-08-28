import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { Types, Variant } from './button.type';

@Component({
  imports: [CommonModule, NgTemplateOutlet, RouterLink],
  selector: 'app-shared-button',
  standalone: true,
  templateUrl: 'button.component.html',
})
export class ButtonComponent {
  @Input() type?: Types = 'button';
  @Input() url?: string;
  @Input() variant?: Variant = 'primary';

  @Output() clicked = new EventEmitter<void>();

  classes: string;

  handle_click() {
    this.clicked.emit();
  }
}
