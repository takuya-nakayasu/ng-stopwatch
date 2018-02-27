import { Action } from 'redux';
import { TimerActions } from '../state/action';

export interface IAppState {
    time: number;
    isStop: boolean;
}

export const INITIAL_STATE: IAppState = {
    time: 0,
    isStop: false,
};
