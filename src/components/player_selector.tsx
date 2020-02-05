import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import range from 'lodash.range';
import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';

interface Props {
  readonly initialValue: number;
  readonly minPlayers: number;
  readonly maxPlayers: number;
  readonly setNumPlayers: Dispatch<SetStateAction<number>>;
}

const PlayerSelector: React.SFC<Props> = ({
  initialValue,
  minPlayers,
  maxPlayers,
  setNumPlayers
}) => {
  const onChange: (
    event: ChangeEvent<{}>,
    value: number
  ) => void = (_, value) => {
    setNumPlayers(value);
  };

  return <>
    <Tabs value={initialValue} onChange={onChange}>
      {range(minPlayers, maxPlayers + 1).map(n => (
        <Tab key={n} value={n} label={`${n} Player`} />
      ))}
    </Tabs>
  </>;
};
export default PlayerSelector;
