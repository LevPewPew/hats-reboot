import React from 'react';
import styled from 'styled-components';

interface RowProps {
  className?: string;
  name: string;
  team: number;
  scores: Array<number>;
}

const RowSubComponent: React.FC<RowProps> = ({ className, name, scores }) => {
  return (
    <div className={className}>
      <div className="name">{name}</div>
      {scores.map((score, i) => (
        <div key={i} className="score">
          {score}
        </div>
      ))}
    </div>
  );
};

const Row = styled(RowSubComponent)`
  display: flex;
  justify-content: space-evenly;
`;

interface TotalProps {
  className?: string;
  total: number;
}

const TotalSubComponent: React.FC<TotalProps> = ({ className, total }) => {
  return <div className={className}>{total}</div>;
};

const Total = styled(TotalSubComponent)`
  border: 2px dashed red;
`;

interface ScoreTableProps {
  className?: string;
  allScores: Array<RowProps>;
}

export const ScoreTable: React.FC<ScoreTableProps> = ({ className, allScores }) => {
  return (
    <div className={className}>
      <div className="headers">
        <div className="header"></div>
        {allScores[0].scores.map((score, i) => (
          <div key={i} className="header">
            Round {i + 1}
          </div>
        ))}
        <div className="header">Total</div>
      </div>
      {allScores.map((player, i) => (
        <Row key={i} name={player.name} team={player.team} scores={player.scores} />
      ))}
      {allScores.map((_, i) => {
        if (i % 2 === 0 && i < allScores.length - 1) {
          const totalPlayer1 = allScores[i].scores.reduce((acc, cv) => acc + cv, 0);
          const totalPlayer2 = allScores[i + 1].scores.reduce((acc, cv) => acc + cv, 0);
          const total = totalPlayer1 + totalPlayer2;

          return <Total key={i} total={total} />;
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default styled(ScoreTable)`
  .headers {
    display: flex;
    justify-content: space-evenly;
    border: 2px dashed blue;
  }
`;
