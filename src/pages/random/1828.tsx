import sampleSize from 'lodash.samplesize';
import React, { useState } from 'react';

import Layout from '../../components/layout';
import OrderedList from '../../components/ordered_list';
import PlayerSelector from '../../components/player_selector';

const MIN_PLAYERS = 3;
const MAX_PLAYERS = 5;

const Page: React.VFC = () => {
  const [numPlayers, setNumPlayers] = useState(MAX_PLAYERS);

  const companies: readonly string[] = sampleSize(
    [
      'Canadian Pacific',
      'Grand Trunk',
      'Illinois Central',
      'Michigan Central',
      'Missouri Pacific Railroad',
      'New York, Chicago & St. Louis Railroad',
      'Norfolk & Western',
      'Ontario, Simcoe & Huron',
    ],
    numPlayers + 1
  );

  return (
    <Layout>
      <h1>1828</h1>

      <PlayerSelector
        initialValue={numPlayers}
        minPlayers={MIN_PLAYERS}
        maxPlayers={MAX_PLAYERS}
        setNumPlayers={setNumPlayers}
      />

      <h3>{numPlayers} Players</h3>
      <OrderedList heading="$250 Privates" list={companies} />
    </Layout>
  );
};

export default Page;
