import React from 'react';
import styled from 'styled-components';

interface WordDisplayProps {
  children: React.ReactNode;
  className?: string;
}

export const WordDisplay: React.FC<WordDisplayProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default styled(WordDisplay)``;
