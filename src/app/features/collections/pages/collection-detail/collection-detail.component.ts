import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CollectionService } from '@features/collections/services/collection.service';

import { AccordionListComponent } from '@features/collections/components/accordion-list/accordion-list.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { LayoutComponent } from '@core/components/layout/layout.component';

import type { Url } from '@core/types/url.type';

@Component({
  imports: [
    AccordionListComponent,
    ButtonComponent,
    HeaderComponent,
    LayoutComponent,
  ],
  selector: 'app-collection-detail',
  standalone: true,
  templateUrl: 'collection-detail.component.html',
})
export class CollectionDetailComponent implements OnInit {
  constructor(
    private activated_route: ActivatedRoute,
    private collection_service: CollectionService,
  ) {}

  collection_name: string;
  collection_urls: Url[] = [];

  ngOnInit() {
    this.collection_service
      .get_collection(this.activated_route.snapshot.params['id'])
      .subscribe((collection) => {
        this.collection_name = collection.name;
        this.collection_urls = collection.urls;
      });
  }
}
