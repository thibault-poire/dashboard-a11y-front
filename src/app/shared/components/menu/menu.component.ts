import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
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
  @Input({ required: true }) options: Option[];

  @ViewChild(IconButtonComponent, { read: ElementRef }) button: ElementRef;
  @ViewChild('menu') menu: ElementRef;

  is_expanded = false;
  menu_button_id = `menu-button-${crypto.randomUUID()}`;
  menu_id: string = `menu-${crypto.randomUUID()}`;

  @HostListener('window:click', ['$event'])
  close_menu(event?: MouseEvent) {
    const target = event?.target as HTMLElement;

    if (
      this.button?.nativeElement.contains(target) ||
      this.menu?.nativeElement.contains(target)
    ) {
      return;
    }

    this.is_expanded = false;
  }

  handle_click() {
    this.is_expanded = !this.is_expanded;
  }
}
