import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, switchMap, tap } from 'rxjs';

import { Collection, CollectionBody } from '@core/types/collection.type';

@Injectable({ providedIn: 'root' })
export class CollectionService {
  base_url = 'http://localhost:1337';

  collection$ = new BehaviorSubject<Collection[]>([]);

  constructor(private http: HttpClient) {}

  get_collections() {
    return this.http.get<Collection[]>(`${this.base_url}/api/collections`).pipe(
      tap((collections) => {
        this.collection$.next(collections);
      }),
    );
  }

  delete_coolection(collection_id: string) {
    return this.http
      .delete(`${this.base_url}/api/collections/${collection_id}`)
      .pipe(
        switchMap(() => this.collection$),
        tap((collections) => {
          this.collection$.next(
            collections.filter(({ _id }) => {
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
        tap((collection) => {
          this.collection$.next([...this.collection$.getValue(), collection]);
        }),
      );
  }
}
