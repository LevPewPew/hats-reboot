import React from 'react';
import styled from 'styled-components';

interface PlayersFormProps {
  className: string;
}

export const PlayersForm: React.FC<PlayersFormProps> = ({ className }) => {
  return (
    <form className={className}>
      <div>PlayersForm PLACEHOLDER</div>
    </form>
  );
};

export default styled(PlayersForm)``;
