import React from 'react';
import styled from 'styled-components';

interface WordsFormProps {
  className?: string;
}

export const WordsForm: React.FC<WordsFormProps> = ({ className }) => {
  return (
    <form className={className}>
      <div>WordsForm PLACEHOLDER</div>
    </form>
  );
};

export default styled(WordsForm)``;
