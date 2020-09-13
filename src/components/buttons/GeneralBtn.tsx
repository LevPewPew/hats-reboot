import React from 'react';
import styled from 'styled-components';

interface GeneralBtnProps {
  className: string;
}

export const GeneralBtn: React.FC<GeneralBtnProps> = ({ className }) => {
  return (
    <button className={className}>
      <div>GeneralBtn PLACEHOLDER</div>
    </button>
  );
};

export default styled(GeneralBtn)``;
