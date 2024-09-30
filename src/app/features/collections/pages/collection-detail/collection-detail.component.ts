import { Component, computed, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { CollectionService } from '@features/collections/services/collection.service';

import { ButtonComponent } from '@shared/components/button/button.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { LayoutComponent } from '@core/components/layout/layout.component';

@Component({
  imports: [ButtonComponent, HeaderComponent, LayoutComponent],
  selector: 'app-collection-detail',
  standalone: true,
  templateUrl: 'collection-detail.component.html',
})
export class CollectionDetailComponent implements OnInit {
  constructor(
    private activated_route: ActivatedRoute,
    private collection_service: CollectionService,
  ) {}

  private collection = toSignal(this.collection_service.collection$);

  ngOnInit() {
    this.collection_service
      .get_collection(this.activated_route.snapshot.params['id'])
      .subscribe();
  }

  formatted_collection = computed(() => {
    return { name: this.collection()?.name ?? '' };
  });
}
