import React from 'react';
import styled from 'styled-components';

interface ScorePageProps {
  className?: string;
  roundCompleted: number;
}

export const ScorePage: React.FC<ScorePageProps> = ({ className, roundCompleted }) => {
  return (
    <main className={className}>
      <h1>Round {roundCompleted} complete!</h1>
    </main>
  );
};

export default styled(ScorePage)``;
