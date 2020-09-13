import React from 'react';
import styled from 'styled-components';

interface GamePageProps {
  className: string;
}

export const GamePage: React.FC<GamePageProps> = ({ className }) => {
  return (
    <main className={className}>
      <div>GamePage PLACEHOLDER</div>
    </main>
  );
};

export default styled(GamePage)``;
