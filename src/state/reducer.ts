import { IAppState } from './store';
import { Action } from 'redux';
import { TimerActions,
         VoidAction,
         StringAction,
        } from './action';

export function rootReducer(
    lastState: IAppState,
    action: Action
): IAppState {
    switch (action.type) {
        case TimerActions.START:
            return {
              digitalTimer: (action as StringAction).payload,
              isStop: false,
            };
        case TimerActions.STOP:
            return {
              digitalTimer: lastState.digitalTimer,
              isStop: true,
            };
            default:
                return lastState;
    }
}
