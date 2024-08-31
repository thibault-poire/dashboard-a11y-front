import { Component, input } from '@angular/core';

import { IconName } from '@core/types/icons.type';

@Component({
  selector: 'app-shared-icon',
  standalone: true,
  templateUrl: 'icon.component.html',
})
export class IconComponent {
  icon_name = input.required<IconName>();
}
