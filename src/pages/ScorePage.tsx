import React from 'react';
import { ScoreTable } from 'src/components';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '@hats-reboot/state-management-types';

interface ScorePageProps {
  className?: string;
}

export const ScorePage: React.FC<ScorePageProps> = ({ className }) => {
  const round = useSelector<RootState, number>((state) => state.playReducer.round);
  const players = useSelector<RootState, Array<Player>>((state) => state.gameReducer.players);

  return (
    <main className={className}>
      <h1>Round {round} complete!</h1>
      <h2>SCORES</h2>
      <ScoreTable allScores={players} />
    </main>
  );
};

export default styled(ScorePage)``;
