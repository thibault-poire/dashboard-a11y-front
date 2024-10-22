import { Component, input, viewChild } from '@angular/core';
import { CollectionService } from '@features/collections/services/collection.service';

import { MenuComponent as SharedMenuComponent } from '@shared/components/menu/menu.component';

import type { Option } from '@shared/components/menu/menu.type';

@Component({
  imports: [SharedMenuComponent],
  selector: 'app-menu',
  standalone: true,
  templateUrl: 'menu.component.html',
})
export class MenuComponent {
  shared_menu = viewChild<SharedMenuComponent>(SharedMenuComponent);

  collection_id = input.required<string>();

  constructor(private collection_service: CollectionService) {}

  options: Option[] = [
    {
      id: crypto.randomUUID(),
      action: () => this.edit_colletion(this.collection_id()),
      icon_name: 'edit',
      label: 'Edit collection',
    },

    {
      id: crypto.randomUUID(),
      action: () => this.audit_collection(this.collection_id()),
      icon_name: 'rocket-launch',
      label: 'Launch audit',
    },

    {
      id: crypto.randomUUID(),
      action: () => this.delete_collection(this.collection_id()),
      icon_name: 'delete',
      label: 'Delete collection',
    },
  ];

  delete_collection(collection_id: string) {
    this.collection_service.delete_collection(collection_id).subscribe();
    this.shared_menu()?.close_menu();
  }

  edit_colletion(collection_id: string) {
    console.log(collection_id);
    this.shared_menu()?.close_menu();
  }

  audit_collection(collection_id: string) {
    this.collection_service.post_collection_audit(collection_id).subscribe();
    this.shared_menu()?.close_menu();
  }
}
