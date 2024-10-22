import { Component, Input } from '@angular/core';

import { AccordionComponent } from '@shared/components/accordion/accordion.component';
import { TableComponent } from '@shared/components/table/table.component';

import type { Url } from '@core/types/url.type';

@Component({
  imports: [AccordionComponent, TableComponent],
  selector: 'app-accordion-list',
  standalone: true,
  templateUrl: 'accordion-list.component.html',
})
export class AccordionListComponent {
  @Input() urls: Url[];

  format_url_violations(url: Url) {
    return url.reports[0].violations.map(({ description, impact }) => {
      return [description, impact];
    });
  }

  format_url_incomplete(url: Url) {
    return url.reports[0].incomplete.map(({ description }) => {
      return [description];
    });
  }
}
