import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { Types, Variant } from './button.type';

@Component({
  imports: [NgTemplateOutlet, RouterLink],
  selector: 'app-shared-button',
  standalone: true,
  templateUrl: 'button.component.html',
})
export class ButtonComponent {
  disabled = input<boolean | undefined>();
  type = input<Types>('button');
  url = input<string | undefined>();
  variant = input<Variant>('primary');

  clicked = output<void>();

  classes = computed(() => {
    const base =
      'flex px-6 py-3 leading-6 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed';

    switch (this.variant()) {
      case 'primary':
        return `${base} text-tertiary bg-button-container-primary border-2 border-button-primary hover:bg-button-container-primary-hover disabled:hover:bg-button-container-primary`;
      case 'secondary':
        return `${base} text-primary bg-button-container-secondary border-2 border-button-secondary hover:bg-button-container-secondary-hover disabled:hover:bg-button-container-secondary`;
    }
  });
}
