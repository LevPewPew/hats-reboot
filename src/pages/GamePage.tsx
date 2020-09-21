import React from 'react';
import styled from 'styled-components';
import { Timer } from 'src/components';
import { GeneralBtn } from 'src/components/buttons';
import { decrementTimer, resetTimerThunk } from 'src/actions/game-actions';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { DecrementTimerAction, ResetTimerAction } from 'src/actions/game-actions';
import { ThunkDispatch } from 'redux-thunk';
import { AppThunkAction } from '@hats-reboot/state-management-types';

interface GamePageProps {
  className?: string;
}

export const GamePage: React.FC<GamePageProps> = ({ className }) => {
  const dispatch: Dispatch<any> | ThunkDispatch<any, any, any> = useDispatch();

  return (
    <main className={className}>
      <Timer />
      <GeneralBtn handleClick={() => dispatch<DecrementTimerAction>(decrementTimer())}>
        <div>DECREMENT</div>
      </GeneralBtn>
      <GeneralBtn handleClick={() => dispatch<AppThunkAction<ResetTimerAction>>(resetTimerThunk())}>
        <div>RESET</div>
      </GeneralBtn>
    </main>
  );
};

export default styled(GamePage)``;
