import { Component, input } from '@angular/core';

import { TitleComponent } from '@shared/components/title/title.component';

@Component({
  imports: [TitleComponent],
  selector: 'app-shared-header',
  standalone: true,
  templateUrl: 'header.component.html',
})
export class HeaderComponent {
  header_title = input.required<string>();
}
