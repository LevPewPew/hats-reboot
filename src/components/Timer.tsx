import React from 'react';
import styled from 'styled-components';

interface TimerProps {
  className: string;
}

export const Timer: React.FC<TimerProps> = ({ className }) => {
  return (
    <div className={className}>
      <div>Timer PLACEHOLDER</div>
    </div>
  );
};

export default styled(Timer)``;
