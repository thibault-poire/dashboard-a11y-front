import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';
import { TitleComponent } from '@shared/components/title/title.component';

@Component({
  imports: [IconButtonComponent, TitleComponent],
  selector: 'app-shared-modal',
  standalone: true,
  templateUrl: 'modal.component.html',
})
export class ModalComponent {
  @Input() is_open: boolean;
  @Input({ required: true }) title: string;

  @Output() closed = new EventEmitter<void>();
}
