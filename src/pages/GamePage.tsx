import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Timer } from 'src/components';
import { GeneralBtn } from 'src/components/buttons';
import { decrementTimer, resetTimer } from 'src/actions/game-actions';
import { useDispatch } from 'react-redux';

interface GamePageProps {
  className?: string;
}

export const GamePage: React.FC<GamePageProps> = ({ className }) => {
  const [isTimerTicking, setIsTimerTicking] = useState(false);
  const dispatch = useDispatch();
  const firstRender = useRef(true);
  const intervalId = useRef(0);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (isTimerTicking) {
      intervalId.current = setInterval(() => dispatch(decrementTimer()), 1000);
    } else {
      clearInterval(intervalId.current);
    }
  }, [isTimerTicking]);

  return (
    <main className={className}>
      <Timer />
      <GeneralBtn handleClick={() => dispatch(decrementTimer())}>
        <div>DECREMENT</div>
      </GeneralBtn>
      <GeneralBtn handleClick={() => dispatch(resetTimer())}>
        <div>RESET</div>
      </GeneralBtn>
      <GeneralBtn handleClick={() => (isTimerTicking ? setIsTimerTicking(false) : setIsTimerTicking(true))}>
        <div>{isTimerTicking ? 'PAUSE' : 'RESUME'}</div>
      </GeneralBtn>
    </main>
  );
};

export default styled(GamePage)``;
