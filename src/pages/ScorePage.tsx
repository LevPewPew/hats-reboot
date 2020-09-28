import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '@hats-reboot/state-management-types';

interface ScorePageProps {
  className?: string;
}

export const ScorePage: React.FC<ScorePageProps> = ({ className }) => {
  // const round = useSelector<RootState, number>((state) => state.gameReducer.round);

  return (
    <main className={className}>
      {/* <h1>Round {round} complete!</h1> */}
      <h2>SCORES</h2>
    </main>
  );
};

export default styled(ScorePage)``;
