import React from 'react';
import styled from 'styled-components';
import { Timer } from 'src/components';
import { GeneralBtn } from 'src/components/buttons';
import { decrementTimer, resetTimer } from 'src/actions/game-actions';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

interface GamePageProps {
  className?: string;
}

export const GamePage: React.FC<GamePageProps> = ({ className }) => {
  const dispatch: Dispatch<any> = useDispatch();

  return (
    <main className={className}>
      <Timer />
      <GeneralBtn handleClick={() => dispatch(decrementTimer())}>
        <div>DECREMENT</div>
      </GeneralBtn>
      <GeneralBtn handleClick={() => dispatch(resetTimer())}>RESET</GeneralBtn>
    </main>
  );
};

export default styled(GamePage)``;
