import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-table',
  standalone: true,
  templateUrl: 'table.component.html',
})
export class TableComponent {
  @Input() caption?: string;
  @Input() headers?: string[];
  @Input() rows: string[][];
}
