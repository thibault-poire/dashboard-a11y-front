import { Component, EventEmitter, Output } from '@angular/core';

import { FormComponent as SharedFormComponent } from '@core/components/form/form.component';
import { InputComponent } from '@shared/components/input/input.component';
import { InputListComponent } from '@features/collections/components/input-list/input-list.component';

@Component({
  imports: [SharedFormComponent, InputComponent, InputListComponent],
  selector: 'app-form',
  standalone: true,
  templateUrl: 'form.component.html',
})
export class FormComponent {
  @Output() closed = new EventEmitter<void>();
}
