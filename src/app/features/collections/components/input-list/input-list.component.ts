import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';

import type { Item } from './input.type';

@Component({
  imports: [CommonModule, IconButtonComponent],
  selector: 'app-input-list',
  standalone: true,
  templateUrl: 'input-list.component.html',
})
export class InputListComponent implements OnInit, AfterViewInit {
  @Input({ required: true }) legend: string;

  @ViewChildren('input') inputs: QueryList<ElementRef<HTMLInputElement>>;

  url_inputs: Item[] = [];

  ngOnInit() {
    this.create_input();
  }

  ngAfterViewInit() {
    this.inputs.changes.subscribe(
      (next: QueryList<ElementRef<HTMLInputElement>>) => {
        next.last.nativeElement.focus();
      },
    );
  }

  create_input() {
    this.url_inputs.push({
      id: `input-list-${crypto.randomUUID()}`,
      value: '',
    });
  }

  delete_input(id: string) {
    this.url_inputs = this.url_inputs.filter((input) => {
      return id !== input.id;
    });
  }
}
