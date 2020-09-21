import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '@hats-reboot/state-management-types';

interface TimerProps {
  className?: string;
}

export const Timer: React.FC<TimerProps> = ({ className }) => {
  const timer: number = useSelector<RootState, number>((state) => state.gameReducer.timer);

  return (
    <div className={className}>
      <div>{timer}</div>
    </div>
  );
};

export default styled(Timer)``;
