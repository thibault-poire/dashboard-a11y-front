import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, tap } from 'rxjs';

import {
  Collection,
  CollectionBody,
  CollectionOverview,
} from '@core/types/collection.type';
import { stringify } from 'qs';

@Injectable({ providedIn: 'root' })
export class CollectionService {
  base_url = 'http://localhost:1337';

  collections_overview$ = new BehaviorSubject<CollectionOverview[]>([]);

  constructor(private http: HttpClient) {}

  get_collections_overview() {
    const url = new URL(`${this.base_url}/api/collections`);

    url.search = stringify({
      select: ['_id', 'name'],
      populate: {
        urls: {
          select: ['-_id', 'updated_at'],
          sort: '-updated_at',
          limit: 1,
          populate: {
            reports: {
              select: ['violations', 'incomplete'],
            },
          },
        },
      },
    });

    return this.http
      .get<CollectionOverview[]>(url.toString())
      .pipe(tap((collections) => this.collections_overview$.next(collections)));
  }

  delete_collection(collection_id: string) {
    return this.http
      .delete(`${this.base_url}/api/collections/${collection_id}`)
      .pipe(
        tap(() => {
          this.collections_overview$.next(
            this.collections_overview$.value.filter(({ _id }) => {
              return _id !== collection_id;
            }),
          );
        }),
      );
  }

  post_collection(body: CollectionBody) {
    return this.http
      .post<Collection>(`${this.base_url}/api/collections`, body)
      .pipe(
        tap(({ _id, name, urls }) => {
          this.collections_overview$.next([
            ...this.collections_overview$.value,
            {
              _id,
              name,
              urls:
                urls?.map(({ updated_at }) => ({ updated_at, reports: [] })) ??
                [],
            },
          ]);
        }),
      );
  }
}
