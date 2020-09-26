import React from 'react';
import styled from 'styled-components';

interface GameCtrlContainerProps {
  className?: string;
}

export const GameCtrlContainer: React.FC<GameCtrlContainerProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default styled(GameCtrlContainer)``;
