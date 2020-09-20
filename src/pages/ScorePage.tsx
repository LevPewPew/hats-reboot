import React from 'react';
import styled from 'styled-components';

interface ScorePageProps {
  className?: string;
}

export const ScorePage: React.FC<ScorePageProps> = ({ className }) => {
  return (
    <main className={className}>
      <div>ScorePage PLACEHOLDER</div>
    </main>
  );
};

export default styled(ScorePage)``;
