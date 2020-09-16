import { DECREMENT_TIMER, RESET_TIMER } from './action-types';

const TOTAL_ROUND_TIME = 45;

export function decrementTimer() {
  return {
    action: DECREMENT_TIMER,
  };
}

export function resetTimer() {
  return {
    action: RESET_TIMER,
    value: TOTAL_ROUND_TIME,
  };
}
