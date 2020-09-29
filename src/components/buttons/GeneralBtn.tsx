import React from 'react';
import styled from 'styled-components';

interface GeneralBtnProps {
  className?: string;
  disabled?: boolean;
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const GeneralBtn: React.FC<GeneralBtnProps> = ({ children, className, disabled, handleClick }) => {
  return (
    <button className={className} onClick={handleClick} type="button" disabled={disabled}>
      {children}
    </button>
  );
};

export default styled(GeneralBtn)``;
