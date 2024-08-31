import { Component, input, output } from '@angular/core';

import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';
import { TitleComponent } from '@shared/components/title/title.component';

@Component({
  imports: [IconButtonComponent, TitleComponent],
  selector: 'app-shared-modal',
  standalone: true,
  templateUrl: 'modal.component.html',
})
export class ModalComponent {
  is_open = input<boolean | undefined>();
  modal_title = input.required<string | undefined>();

  closed = output<void>();
}
