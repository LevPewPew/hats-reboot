import React from 'react';
import styled from 'styled-components';

interface GeneralBtnProps {
  children: React.ReactNode;
  className?: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const GeneralBtn: React.FC<GeneralBtnProps> = ({ children, className, handleClick }) => {
  return (
    <button className={className} onClick={handleClick} type="button">
      {children}
    </button>
  );
};

export default styled(GeneralBtn)``;
