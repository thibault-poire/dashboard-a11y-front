import { Component, input, output } from '@angular/core';

import { IconName } from '@core/types/icons.type';

import { IconComponent } from '@shared/components/icon/icon.component';

@Component({
  imports: [IconComponent],
  selector: 'app-shared-icon-button',
  standalone: true,
  templateUrl: 'icon-button.component.html',
})
export class IconButtonComponent {
  aria_controls = input<string | undefined>();
  aria_expanded = input<boolean | undefined>();
  aria_haspopup = input<'menu' | undefined>();
  id = input<string | undefined>();
  icon_name = input.required<IconName>();
  label = input.required<string>();

  clicked = output<void>();

  handle_click() {
    this.clicked.emit();
  }
}
