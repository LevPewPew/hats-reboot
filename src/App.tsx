import React from 'react';
import styled from 'styled-components';
import { GamePage } from 'src/pages';

interface AppProps {
  className?: string;
}

export const App: React.FC<AppProps> = ({ className }) => {
  return (
    <div className={className}>
      <GamePage />
    </div>
  );
};

export default styled(App)``;
