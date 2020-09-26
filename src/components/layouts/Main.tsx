import React from 'react';
import styled from 'styled-components';

interface MainProps {
  className?: string;
}

export const Main: React.FC<MainProps> = ({ className, children }) => {
  return <main className={className}>{children}</main>;
};

export default styled(Main)``;
