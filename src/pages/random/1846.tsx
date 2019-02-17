import range from 'lodash.range';
import shuffle from 'lodash.shuffle';
import React, { useState } from 'react';

import Layout from '../../components/layout';
import OrderedList from '../../components/ordered_list';

const MIN_PLAYERS: number = 3;
const MAX_PLAYERS: number = 5;

const Page: React.SFC = () => {
  const [numPlayers, setNumPlayers] = useState(5);

  const companies: ReadonlyArray<string> = [
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

  const privates: ReadonlyArray<string> = [
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

  const onClick: (n: number) => () => void = n => () => setNumPlayers(n);

  const PlayerSelector: React.SFC = () => (
    <>
      {range(MIN_PLAYERS, MAX_PLAYERS + 1).map(n => (
        <button key={n} onClick={onClick(n)}>
          {n}
        </button>
      ))}
    </>
  );

  return (
    <Layout>
      <h1>1846</h1>

      <p>Number of Players</p>
      <PlayerSelector />
      <br />
      <br />

      <OrderedList heading="Railroad Corporations" list={companies} />
      <OrderedList heading="Privates" list={privates} />
    </Layout>
  );
};

export default Page;
