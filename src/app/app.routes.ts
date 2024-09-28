import { Routes } from '@angular/router';

import { CollectionDetailComponent } from '@features/collections/pages/collection-detail/collection-detail.component';
import { CollectionListComponent } from '@features/collections/pages/collection-list/collection-list.component';

export const routes: Routes = [
  { component: CollectionListComponent, path: '' },
  { component: CollectionDetailComponent, path: ':id' },
];
