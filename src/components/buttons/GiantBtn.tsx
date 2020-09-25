import React from 'react';
import styled from 'styled-components';

interface GiantBtnProps {
  className?: string;
}

export const GiantBtn: React.FC<GiantBtnProps> = ({ className }) => {
  return (
    <button className={className} type="button">
      <div>GiantBtn PLACEHOLDER</div>
    </button>
  );
};

export default styled(GiantBtn)``;
