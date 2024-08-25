import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormComponent } from '@core/components/form/form.component';
import { ModalComponent as SharedModalComponent } from '@shared/components/modal/modal.component';

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
