import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ButtonComponent } from '@shared/components/button/button.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { LayoutComponent } from '@core/components/layout/layout.component';

@Component({
  imports: [ButtonComponent, HeaderComponent, LayoutComponent],
  selector: 'app-collection-detail',
  standalone: true,
  templateUrl: 'collection-detail.component.html',
})
export class CollectionDetailComponent {
  constructor(private activated_route: ActivatedRoute) {}

  title = `${this.activated_route.snapshot.params['id']}`;
}
