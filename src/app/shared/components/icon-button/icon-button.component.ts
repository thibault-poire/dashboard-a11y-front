import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IconName } from '@core/types/icons.type';

import { IconComponent } from '@shared/components/icon/icon.component';

@Component({
  imports: [IconComponent],
  selector: 'app-shared-icon-button',
  standalone: true,
  templateUrl: 'icon-button.component.html',
})
export class IconButtonComponent {
  @Input() aria_controls?: string;
  @Input() aria_expanded?: boolean;
  @Input() aria_haspopup?: 'menu';
  @Input() id?: string;
  @Input({ required: true }) icon_name: IconName;
  @Input({ required: true }) label: string;

  @Output() clicked = new EventEmitter<void>();

  handle_click() {
    this.clicked.emit();
  }
}
