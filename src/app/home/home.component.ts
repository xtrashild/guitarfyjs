import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { map, tap } from 'rxjs/operators';
import { Guitar } from '../models/guitar.model';
import { GetItems } from '../store/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  bannersIndex: number[] = [1, 2, 3, 4];
  items$: Observable<Guitar[]>;
  constructor(private store: Store<any>) {
    this.items$ = store.pipe(
      select('shop'),
      map((state) => state.items)
    );
  }

  ngOnInit(): void {
    this.store.dispatch(new GetItems());
  }
}
