import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

// FIXME RootState thing seems bad
interface RootState {
  gameReducer: {
    timer: number;
  };
}

interface TimerProps {
  className?: string;
}

export const Timer: React.FC<TimerProps> = ({ className }) => {
  const timer: number = useSelector((state: RootState) => state.gameReducer.timer);

  return (
    <div className={className}>
      <div>{timer}</div>
    </div>
  );
};

export default styled(Timer)``;
