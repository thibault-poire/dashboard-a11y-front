import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ModalComponent as SharedModalComponent } from '@shared/components/modal/modal.component';
import { FormComponent } from '@features/collections/components/form/form.component';

@Component({
  imports: [FormComponent, SharedModalComponent],
  selector: 'app-modal',
  standalone: true,
  templateUrl: 'modal.component.html',
})
export class ModalComponent {
  @Input() is_open: boolean;

  @Output() closed = new EventEmitter<void>();
}
