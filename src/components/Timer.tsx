import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

interface RootState {
  gameReducer: {
    timer: number;
  };
}

interface TimerProps {
  className?: string;
}

export const Timer: React.FC<TimerProps> = ({ className }) => {
  const timer = useSelector((state: RootState) => state.gameReducer.timer);

  return (
    <div className={className}>
      <div>{timer}</div>
    </div>
  );
};

export default styled(Timer)``;
