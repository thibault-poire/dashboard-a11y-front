import { Component, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { CollectionService } from '@features/collections/services/collection.service';
import { DialogService } from '@features/collections/services/dialog.service';

import { ButtonComponent } from '@shared/components/button/button.component';
import { CardComponent } from '@features/collections/components/card/card.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { LayoutComponent } from '@core/components/layout/layout.component';
import { ModalComponent } from '@features/collections/components/modal/modal.component';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '@shared/components/title/title.component';
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
  constructor(
    private collection_service: CollectionService,
    private readonly dialog_service: DialogService,
  ) {}

  collections = toSignal(this.collection_service.collection$);
  is_dialog_open = toSignal(this.dialog_service.is_open$);

  ngOnInit() {
    this.collection_service.get_collections().subscribe();
  }

  handle_click() {
    this.dialog_service.set_is_open(true);
  }
}
