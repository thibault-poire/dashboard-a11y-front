import {
  Component,
  effect,
  ElementRef,
  HostListener,
  input,
  signal,
  viewChild,
} from '@angular/core';

import { FocusTrapDirective } from '@shared/directives/focus-trap.directive';

import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';
import { IconComponent } from '@shared/components/icon/icon.component';

import type { Option } from './menu.type';

@Component({
  imports: [FocusTrapDirective, IconButtonComponent, IconComponent],
  selector: 'app-shared-menu',
  standalone: true,
  templateUrl: 'menu.component.html',
})
export class MenuComponent {
  constructor() {
    effect(() => {
      if (this.menu()) {
        this.menu()?.nativeElement.focus();
        return;
      }

      if (!this.menu()) {
        this.button()?.nativeElement.firstChild.focus();
        return;
      }
    });
  }

  options = input.required<Option[]>();

  button = viewChild(IconButtonComponent, { read: ElementRef });
  menu = viewChild<ElementRef<HTMLDivElement>>('menu');

  is_expanded = signal<boolean>(false);

  menu_button_id = `menu-button-${crypto.randomUUID()}`;
  menu_id = `menu-${crypto.randomUUID()}`;

  @HostListener('window:click', ['$event'])
  close_menu(event?: MouseEvent) {
    const target = event?.target as HTMLElement;

    if (
      this.button()?.nativeElement.contains(target) ||
      this.menu()?.nativeElement.contains(target)
    ) {
      return;
    }

    this.is_expanded.set(false);
  }

  handle_click() {
    this.is_expanded.update((value) => !value);
  }

  handle_keydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.is_expanded.set(false);
    }
  }
}
