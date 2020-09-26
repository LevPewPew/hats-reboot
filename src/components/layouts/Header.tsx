import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className, children }) => {
  return <header className={className}>{children}</header>;
};

export default styled(Header)``;
