import React from 'react';
import styled from 'styled-components';

interface MainMenuPageProps {
  className: string;
}

export const MainMenuPage: React.FC<MainMenuPageProps> = ({ className }) => {
  return (
    <main className={className}>
      <div>MainMenuPage PLACEHOLDER</div>
    </main>
  );
};

export default styled(MainMenuPage)``;
