import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  imports: [ButtonComponent, FormsModule],
  selector: 'app-core-form',
  standalone: true,
  templateUrl: 'form.component.html',
})
export class FormComponent {
  is_valid = input<boolean>();

  canceled = output<void>();
  submitted = output<void>();
}
