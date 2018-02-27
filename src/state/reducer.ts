import { IAppState } from './store';
import { Action } from 'redux';
import { TimerActions,
         VoidAction,
        } from './action';

export function rootReducer(
    lastState: IAppState,
    action: Action
): IAppState {
    switch (action.type) {
        case TimerActions.COUNT:
            return {
              time: lastState.time += 1,
              isStop: false,
            };
        case TimerActions.STOP:
            return {
              time: lastState.time,
              isStop: true,
            };
        case TimerActions.RESET:
            return {
              time: 0,
              isStop: false,
            };
            default:
                return lastState;
    }
}
