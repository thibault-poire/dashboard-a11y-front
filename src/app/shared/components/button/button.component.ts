import { NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { Types, Variant } from './button.type';

@Component({
  imports: [NgTemplateOutlet, RouterLink],
  selector: 'app-shared-button',
  standalone: true,
  templateUrl: 'button.component.html',
})
export class ButtonComponent implements OnInit {
  @Input() type?: Types = 'button';
  @Input() url?: string;
  @Input() variant?: Variant = 'primary';

  @Output() clicked = new EventEmitter<void>();

  classes: string;

  ngOnInit() {
    const base = 'flex px-6 py-3 leading-6 rounded-full transition-colors';

    let variant = '';

    switch (this.variant) {
      case 'primary':
        variant =
          'text-tertiary bg-button-container-primary border-2 border-button-primary hover:bg-button-container-primary-hover';
        break;

      case 'secondary':
        variant =
          'text-primary bg-button-container-secondary border-2 border-button-secondary hover:bg-button-container-secondary-hover';
        break;
    }

    this.classes = `${base} ${variant}`;
  }

  handle_click() {
    this.clicked.emit();
  }
}
