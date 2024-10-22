import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  imports: [IconComponent],
  selector: 'app-shared-accordion',
  standalone: true,
  templateUrl: 'accordion.component.html',
})
export class AccordionComponent {
  @Input() is_open: boolean;

  handle_click(event: MouseEvent) {
    event?.preventDefault();

    this.is_open = !this.is_open;
  }
}
