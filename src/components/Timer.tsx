import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '@hats-reboot/state-management-types';

interface TimerProps {
  className?: string;
}

export const Timer: React.FC<TimerProps> = ({ className }) => {
  const timer = useSelector<RootState, number>((state) => state.playReducer.timer);
  const timePerTurn = useSelector<RootState, number>((state) => state.settingsReducer.timePerTurn);

  return (
    <div className={className}>
      <div>Timer: {timer}</div>
      <div>Time per Turn: {timePerTurn}</div>
    </div>
  );
};

export default styled(Timer)``;
