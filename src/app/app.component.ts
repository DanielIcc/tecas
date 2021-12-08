import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from './store/app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})



export class AppComponent implements OnInit, OnDestroy {

  uiSubscription?: Subscription;
  loading: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.uiSubscription = this.store.select('ui').subscribe(({ isLoading }) => this.loading = isLoading);
  }
  ngOnDestroy(): void {
    this.uiSubscription?.unsubscribe();
  }
}
