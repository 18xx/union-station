import range from 'lodash.range';
import React from 'react';

interface Props {
  readonly minPlayers: number;
  readonly maxPlayers: number;
  readonly onClick: (n: number) => (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const PlayerSelector: React.SFC<Props> = ({
  minPlayers,
  maxPlayers,
  onClick
}) => (
  <>
    <h3>Number of Players</h3>
    {range(minPlayers, maxPlayers + 1).map(n => (
      <button key={n} onClick={onClick(n)}>
        {n}
      </button>
    ))}
  </>
);

export default PlayerSelector;
