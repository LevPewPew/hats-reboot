import React from 'react';
import styled from 'styled-components';

interface GiantBtnProps {
  className?: string;
  disabled?: boolean;
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const GiantBtn: React.FC<GiantBtnProps> = ({ children, className, disabled, handleClick }) => {
  return (
    <button className={className} onClick={handleClick} type="button" disabled={disabled}>
      {children}
    </button>
  );
};

export default styled(GiantBtn)``;
