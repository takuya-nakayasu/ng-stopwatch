import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { TimerActions } from '../state/action';

import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @select() readonly digitalTimer$: Observable<number>;
  @select() readonly isStop$: Observable<boolean>;

  isStop: boolean;

  constructor(
    private action: TimerActions
  ) {}

  ngOnInit() {
    this.isStop$.subscribe(isStop => this.isStop = isStop);
  }

  callStart = (): void => {
    let time = 0;
    this.isStop = false;
    Observable.interval(100).subscribe(
      () => {
        if (this.isStop) {
          return;
        }
        time += 1;
        this.action
          .start(`${Math.floor(time / 600)}:${Math.floor((time / 10) % 60)}:${(time % 10)}0`);
      }
    );
  }

  callReset = (): void => {

  }
}
