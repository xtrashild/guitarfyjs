import { Guitar } from './../models/guitar.model';
import { Observable } from 'rxjs/internal/Observable';
import { Component, TemplateRef } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  cart$: Observable<Array<Guitar>> = EMPTY;
  content = 'A simple string content modal overlay';

  constructor(private store: Store<any>) {
    this.cart$ = store.pipe(
      select('shop'),
      map((state) => state.cart)
    );
  }
}
