import { Component, OnInit } from '@angular/core';

import { CollectionsService } from '@features/collections/services/collections';

import { ButtonComponent } from '@shared/components/button/button.component';
import { CardComponent } from '@features/collections/components/card/card.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { LayoutComponent } from '@core/components/layout/layout.component';
import { ModalComponent } from '@features/collections/components/modal/modal.component';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '@shared/components/title/title.component';

import type { Collection } from '@core/types/collection.type';

@Component({
  imports: [
    ButtonComponent,
    CardComponent,
    HeaderComponent,
    LayoutComponent,
    ModalComponent,
    TitleComponent,
    RouterLink,
  ],
  selector: 'app-collection-list',
  standalone: true,
  templateUrl: 'collection-list.component.html',
})
export class CollectionListComponent implements OnInit {
  collections: Collection[];
  is_dialog_open: boolean;

  constructor(private collections_service: CollectionsService) {}

  ngOnInit() {
    this.collections_service.get_collections();

    this.collections_service.collection$.subscribe((collections) => {
      this.collections = collections;
    });
  }

  close_dialog() {
    console.log('test');
    this.is_dialog_open = false;
  }

  display_dialog() {
    this.is_dialog_open = true;
  }
}
