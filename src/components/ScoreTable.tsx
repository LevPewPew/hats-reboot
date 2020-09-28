import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '@hats-reboot/state-management-types';

interface Row {
  name: string;
  team: number;
  score: number;
}

interface ScoreTableProps {
  className?: string;
}

export const ScoreTable: React.FC<ScoreTableProps> = ({ className }) => {
  // const scores = useSelector<RootState,

  return (
    <div className={className}>
      <div>ScoreTable PLACEHOLDER</div>
    </div>
  );
};

export default styled(ScoreTable)``;
