import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { CollectionService } from '@features/collections/services/collection.service';
import { DialogService } from '@features/collections/services/dialog.service';

import { FormComponent as SharedFormComponent } from '@core/components/form/form.component';
import { InputComponent } from '@shared/components/input/input.component';
import { InputListComponent } from '@features/collections/components/input-list/input-list.component';

import { urls_validators } from '@shared/validators/urls.validator';

import type { CollectionBody } from '@core/types/collection.type';
import type { Urls } from '../input-list/input-list.type';

@Component({
  imports: [
    SharedFormComponent,
    InputComponent,
    InputListComponent,
    ReactiveFormsModule,
  ],
  selector: 'app-form',
  standalone: true,
  templateUrl: 'form.component.html',
})
export class FormComponent implements OnInit {
  constructor(
    private readonly collection_service: CollectionService,
    private readonly dialog_service: DialogService,
    private readonly form_builder: FormBuilder,
  ) {}

  form_group = this.form_builder.group({
    name: this.form_builder.control<string>('', [Validators.required]),
    urls: this.form_builder.control<Urls>({}, [urls_validators()]),
  });

  ngOnInit() {
    this.dialog_service.is_open$.subscribe((is_open) => {
      if (!is_open) {
        this.form_group.reset();
      }
    });
  }

  handle_close() {
    this.dialog_service.set_is_open(false);
  }

  handle_submit() {
    const { name, urls } = this.form_group.value;

    if (!name || !urls) {
      return;
    }

    const body: CollectionBody = {
      name,
      urls: Object.values(urls)
        .filter((value) => value)
        .map((url) => ({ url })),
    };

    this.collection_service.post_collection(body).subscribe((a) => {
      console.log(a);
      this.dialog_service.set_is_open(false);
    });
  }
}
