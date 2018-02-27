import { Action } from 'redux';
import { TimerActions } from '../state/action';

export interface IAppState {
    digitalTimer: string;
    isStop: boolean;
}

export const INITIAL_STATE: IAppState = {
    digitalTimer: '0:0:00',
    isStop: false,
};
