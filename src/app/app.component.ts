import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { TimerActions } from '../state/action';

import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @select() readonly time$: Observable<number>;
  @select() readonly isStop$: Observable<boolean>;

  subscription: Subscription;
  isStop: boolean;

  constructor(
    private action: TimerActions
  ) {}

  ngOnInit() {
    this.isStop$.subscribe(isStop => this.isStop = isStop);
  }

  countStart = (): void => {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.isStop = false;
    this.subscription = Observable.interval(1000)
      .subscribe(() => {
        if (this.isStop) {
          return;
        }
        this.action.count();
      });
  }

  callReset = (): void => {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.action.reset();
  }
}
