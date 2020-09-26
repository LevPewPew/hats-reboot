import React from 'react';
import styled from 'styled-components';

interface InstructionsContainerProps {
  className?: string;
}

export const InstructionsContainer: React.FC<InstructionsContainerProps> = ({ className, children }) => {
  return <aside className={className}>{children}</aside>;
};

export default styled(InstructionsContainer)``;
