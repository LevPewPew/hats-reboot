import React from 'react';
import styled from 'styled-components';

interface AppProps {
  className: string;
}

export const App: React.FC<AppProps> = ({ className }) => {
  return (
    <div className={className}>
      <div>App PLACEHOLDER</div>
    </div>
  );
};

export default styled(App)``;
