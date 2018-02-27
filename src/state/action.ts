import { Injectable } from '@angular/core';
import { Action, Store } from 'redux';
import { FluxStandardAction } from 'flux-standard-action';
import { dispatch, NgRedux } from '@angular-redux/store';
import { IAppState } from './store';

export type VoidAction = FluxStandardAction<void, void>;

@Injectable()
export class TimerActions {
  static readonly COUNT = 'COUNT';
  static readonly STOP = 'STOP';
  static readonly RESET = 'RESET';

  @dispatch() count = (): VoidAction => ({
    type: TimerActions.COUNT,
    payload: undefined,
    meta: undefined
  })

  @dispatch() stop = (): VoidAction => ({
    type: TimerActions.STOP,
    payload: undefined,
    meta: undefined
  })

  @dispatch() reset = (): VoidAction => ({
    type: TimerActions.RESET,
    payload: undefined,
    meta: undefined
  })
}
