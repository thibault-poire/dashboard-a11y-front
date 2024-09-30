import { Component, computed, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { CollectionService } from '@features/collections/services/collection.service';
import { DialogService } from '@features/collections/services/dialog.service';

import { ButtonComponent } from '@shared/components/button/button.component';
import { CardComponent } from '@features/collections/components/card/card.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { LayoutComponent } from '@core/components/layout/layout.component';
import { ModalComponent } from '@features/collections/components/modal/modal.component';
import { TitleComponent } from '@shared/components/title/title.component';

@Component({
  imports: [
    ButtonComponent,
    CardComponent,
    HeaderComponent,
    LayoutComponent,
    ModalComponent,
    TitleComponent,
  ],
  selector: 'app-collection-list',
  standalone: true,
  templateUrl: 'collection-list.component.html',
})
export class CollectionListComponent implements OnInit {
  constructor(
    private readonly collection_service: CollectionService,
    private readonly dialog_service: DialogService,
  ) {}

  collections_overview = toSignal(
    this.collection_service.collections_overview$,
  );

  formatted_collections_overview = computed(() => {
    const collections_overview = this.collections_overview();

    return collections_overview?.map(({ _id, name, urls }) => {
      const [url] = urls ?? [];
      const [report] = url.reports ?? [];

      return {
        collection_id: _id,
        errors: report && report.incomplete.length + report.violations.length,
        href: _id,
        name: name,
        updated_at: report && url.updated_at,
        urls: urls?.length,
      };
    });
  });

  is_dialog_open = toSignal(this.dialog_service.is_open$);

  ngOnInit() {
    this.collection_service.get_collections_overview().subscribe();
  }

  handle_click() {
    this.dialog_service.set_is_open(true);
  }
}
