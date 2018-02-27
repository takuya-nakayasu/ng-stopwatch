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
        case TimerActions.START:
            return {
              digitalTimer: '0:0:00',
              isStop: false,
            };
            default:
                return lastState;
    }
}
