import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DialogService {
  is_open$ = new BehaviorSubject<boolean>(false);

  set_is_open(value: boolean) {
    this.is_open$.next(value);
  }
}
