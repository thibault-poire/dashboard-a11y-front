import { Component, Input } from '@angular/core';

import { TitleComponent } from '@shared/components/title/title.component';

@Component({
  imports: [TitleComponent],
  selector: 'app-shared-header',
  standalone: true,
  templateUrl: 'header.component.html',
})
export class HeaderComponent {
  @Input({ required: true }) header_title: string;
}
