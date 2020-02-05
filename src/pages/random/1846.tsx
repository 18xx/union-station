import shuffle from 'lodash.shuffle';
import React, { useState } from 'react';

import Layout from '../../components/layout';
import OrderedList from '../../components/ordered_list';
import PlayerSelector from '../../components/player_selector';

const MIN_PLAYERS = 3;
const MAX_PLAYERS = 5;

const Page: React.SFC = () => {
  const [numPlayers, setNumPlayers] = useState(5);

  const companies: readonly string[] = [
    'B&O - Baltimore & Ohio',
    'GT - Grand Trunk',
    'IC - Illinois Central',
    'NYC - New York Central',
  ].concat(
    shuffle([
      'C&O - Chesapeake & Ohio',
      'Erie - Erie',
      'PRR - Pennsylvania Railroad',
    ]).slice(MAX_PLAYERS - numPlayers)
  );

  const privates: readonly string[] = [
    'Chicago & Western Indiana',
    'Mail Contract',
    'Big 4',
    'Michigan Southern',
  ]
    .concat(
      shuffle(['Lake Shore Line', 'Michigan Central', 'Ohio & Indiana']).slice(
        MAX_PLAYERS - numPlayers
      )
    )
    .concat(
      shuffle([
        'Steamboat Co.',
        'Meat Packing Co.',
        'Tunnel Blasting Co.',
      ]).slice(MAX_PLAYERS - numPlayers)
    );

  return (
    <Layout>
      <h1>1846</h1>

      <PlayerSelector
        initialValue={numPlayers}
        minPlayers={MIN_PLAYERS}
        maxPlayers={MAX_PLAYERS}
        setNumPlayers={setNumPlayers}
      />

      <OrderedList heading="Railroad Corporations" list={companies} />
      <OrderedList heading="Privates" list={privates} />
    </Layout>
  );
};

export default Page;
