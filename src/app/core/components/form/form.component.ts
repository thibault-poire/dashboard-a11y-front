import { Component, EventEmitter, Output } from '@angular/core';

import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  imports: [ButtonComponent],
  selector: 'app-core-form',
  standalone: true,
  templateUrl: 'form.component.html',
})
export class FormComponent {
  @Output() cancel_clicked = new EventEmitter<void>();
  @Output() submit_clicked = new EventEmitter<void>();
}
