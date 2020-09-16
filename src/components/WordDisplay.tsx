import React from 'react';
import styled from 'styled-components';

interface WordDisplayProps {
  className: string;
}

export const WordDisplay: React.FC<WordDisplayProps> = ({ className }) => {
  return (
    <div className={className}>
      <div>WordDisplay PLACEHOLDER</div>
    </div>
  );
};

export default styled(WordDisplay)``;
