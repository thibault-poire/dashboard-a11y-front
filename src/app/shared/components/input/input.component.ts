import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-input',
  standalone: true,
  templateUrl: 'input.component.html',
})
export class InputComponent {
  @Input({ required: true }) label: string;
  @Input() placeholder?: string;
  @Input() required?: boolean;

  input_id = `input-${crypto.randomUUID()}`;
}
