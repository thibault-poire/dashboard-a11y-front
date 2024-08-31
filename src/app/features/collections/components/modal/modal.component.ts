import { Component, input } from '@angular/core';

import { DialogService } from '@features/collections/services/dialog.service';

import { ModalComponent as SharedModalComponent } from '@shared/components/modal/modal.component';
import { FormComponent } from '@features/collections/components/form/form.component';

@Component({
  imports: [FormComponent, SharedModalComponent],
  selector: 'app-modal',
  standalone: true,
  templateUrl: 'modal.component.html',
})
export class ModalComponent {
  constructor(private readonly dialog_service: DialogService) {}

  is_open = input<boolean>();
  modal_title = input<string>();

  handle_close() {
    this.dialog_service.set_is_open(false);
  }
}
