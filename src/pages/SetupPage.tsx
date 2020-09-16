import React from 'react';
import styled from 'styled-components';

interface SetupPageProps {
  className: string;
}

export const SetupPage: React.FC<SetupPageProps> = ({ className }) => {
  return (
    <main className={className}>
      <div>SetupPage PLACEHOLDER</div>
    </main>
  );
};

export default styled(SetupPage)``;
