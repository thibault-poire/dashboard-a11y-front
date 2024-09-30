import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[focus-trap]',
  standalone: true,
})
export class FocusTrapDirective {
  constructor(private element: ElementRef) {}

  @HostListener('keydown', ['$event'])
  handle_keydown(event: KeyboardEvent) {
    const focusables = this.element.nativeElement.querySelectorAll('button');
    const first_element = focusables[0];
    const last_element = focusables[focusables.length - 1];

    if (event.shiftKey && document.activeElement === first_element) {
      last_element.focus();
      event.preventDefault();
    }

    if (!event.shiftKey && document.activeElement === last_element) {
      first_element.focus();
      event.preventDefault();
    }
  }
}
