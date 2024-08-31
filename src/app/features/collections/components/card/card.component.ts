import { Component, computed, input } from '@angular/core';

import { formatDistanceToNow } from 'date-fns';

import { MenuComponent } from '@features/collections/components/menu/menu.component';
import { TitleComponent } from '@shared/components/title/title.component';

@Component({
  imports: [MenuComponent, TitleComponent],
  selector: 'app-card',
  standalone: true,
  templateUrl: 'card.component.html',
})
export class CardComponent {
  collection_id = input.required<string>();
  errors = input<number>();
  name = input.required<string>();
  urls = input<number>();
  updated_at = input<string>();

  last_update = computed(() => {
    const updated_at = this.updated_at();

    if (!updated_at) {
      return { value: '-', text: 'last report' };
    }

    const [value, ...text] = formatDistanceToNow(updated_at, {
      addSuffix: true,
    })
      .replace(/(about|over|almost)\s/, '')
      .replace('less than a minute', '1 minute')
      .split(' ');

    return { value, text: text.join(' ') };
  });
}
