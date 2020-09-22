import React from 'react';
import styled from 'styled-components';
import { Timer } from 'src/components';
import { GeneralBtn } from 'src/components/buttons';
import { decrementTimer, resetTimerThunk } from 'src/actions/game-actions';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { DecrementTimerAction, ResetTimerAction } from 'src/actions/game-actions';
import { AppThunkAction } from '@hats-reboot/state-management-types';

interface GamePageProps {
  className?: string;
}

export const GamePage: React.FC<GamePageProps> = ({ className }) => {
  const dispatch = useDispatch();

  return (
    <main className={className}>
      <Timer />
      <GeneralBtn handleClick={() => dispatch(decrementTimer())}>
        <div>DECREMENT</div>
      </GeneralBtn>
      <GeneralBtn handleClick={() => dispatch(resetTimerThunk())}>
        <div>RESET</div>
      </GeneralBtn>
    </main>
  );
};

export default styled(GamePage)``;
