import {
  Component,
  ElementRef,
  HostListener,
  input,
  signal,
  viewChild,
} from '@angular/core';

import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';
import { IconComponent } from '@shared/components/icon/icon.component';

import type { Option } from './menu.type';

@Component({
  imports: [IconButtonComponent, IconComponent],
  selector: 'app-shared-menu',
  standalone: true,
  templateUrl: 'menu.component.html',
})
export class MenuComponent {
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
}
