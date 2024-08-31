import { Component, computed, input } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';

import type { Level, Variant } from './title.types';

@Component({
  imports: [NgTemplateOutlet],
  selector: 'app-shared-title',
  standalone: true,
  templateUrl: 'title.component.html',
})
export class TitleComponent {
  level = input<Level>(1);
  variant = input<Variant>('heading');

  classes = computed<string>(() => {
    switch (this.variant()) {
      case 'heading':
        return 'text-4xl font-bold';

      case 'heading-2':
        return 'font-bold';
    }
  });
}
