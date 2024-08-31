import { Component, forwardRef, input, signal } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  imports: [FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  selector: 'app-shared-input',
  standalone: true,
  templateUrl: 'input.component.html',
})
export class InputComponent implements ControlValueAccessor {
  disabled = input<boolean>(false);
  label = input.required<string>();
  placeholder = input<string | undefined>();
  required = input<boolean | undefined>();

  is_disabled = signal<boolean>(this.disabled());

  input_id = `input-${crypto.randomUUID()}`;
  value = '';

  on_change: (value: string) => void;
  on_touched: () => void;

  handle_change() {
    this.on_change(this.value);
    this.on_touched();
  }

  registerOnChange(on_change: (value: string) => void) {
    this.on_change = on_change;
  }

  registerOnTouched(on_touch: () => void) {
    this.on_touched = on_touch;
  }

  setDisabledState(is_disabled: boolean) {
    this.is_disabled.set(is_disabled);
  }

  writeValue(value: string) {
    this.value = value;
  }
}
