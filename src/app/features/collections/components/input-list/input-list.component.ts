import {
  Component,
  effect,
  ElementRef,
  forwardRef,
  input,
  signal,
  viewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';

import type { Urls } from './input-list.type';

@Component({
  imports: [CommonModule, FormsModule, IconButtonComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputListComponent),
      multi: true,
    },
  ],
  selector: 'app-input-list',
  standalone: true,
  templateUrl: 'input-list.component.html',
})
export class InputListComponent implements ControlValueAccessor {
  constructor() {
    effect(() => {
      this.urls = this.url_input_ids().reduce((previous, { id }) => {
        return { ...previous, [id]: this.urls[id] || '' };
      }, {});

      this.on_change(this.urls);
    });

    effect(() => {
      if (this.inputs().length > 1) {
        this.inputs().at(-1)?.nativeElement.focus();
      }
    });
  }

  legend = input.required<string>();

  inputs = viewChildren<ElementRef<HTMLInputElement>>('input');

  url_input_ids = signal<{ id: string }[]>([
    { id: `input-list-${crypto.randomUUID()}` },
  ]);

  urls: Urls = {};

  on_change: (urls: Urls) => void;
  on_touched: () => void;

  create_input() {
    const id = `input-list-${crypto.randomUUID()}`;

    this.url_input_ids.update((ids) => {
      return [...ids, { id }];
    });
  }

  delete_input(input_id: string) {
    this.url_input_ids.update((ids) => ids.filter(({ id }) => input_id !== id));
  }

  handle_change() {
    this.on_change(this.urls);
    this.on_touched();
  }

  registerOnChange(on_change: (urls: Urls) => void) {
    this.on_change = on_change;
  }

  registerOnTouched(on_touch: () => void) {
    this.on_touched = on_touch;
  }

  writeValue(urls: Urls) {
    if (urls === null) {
      this.url_input_ids.set([{ id: `input-list-${crypto.randomUUID()}` }]);
      return;
    }

    this.urls = urls;
  }
}
