import range from 'lodash.range';
import shuffle from 'lodash.shuffle';
import React, { useState } from 'react';

import Layout from '../../components/layout';
import OrderedList from '../../components/ordered_list';

interface Company {
  readonly num: number;
  readonly name: string;
}

const MODE_PRIVATES: any = {
  advanced: range(1, 13),
  standard: [1, 18].concat(range(4, 17)),
  starter: [1, 2].concat(range(5, 15)),
}

const Page: React.SFC = () => {
  const [mode, setMode] = useState('standard');

  const concessions: readonly string[] = [
    'LNWR - London and North West Railway',
  ].concat(
    shuffle([
      'GWR - Great Western Railway',
      'LBSCR - London, Brighton and South Coast Railway',
      'SECR - South Eastern & Chatham Railway',
      'MR - Midland Railway',
      'L&YR - Lancashire & Yorkshire',
      'SWR - South Wales Railway',
    ])
  );

  const startMinor: number = mode === 'advanced' ? 14 : 24;

  const minorCompanies: readonly Company[] = [
    { num: 7, name: 'Warrington (H23)' },
    { num: 8, name: 'Sheffield (K24)' },
    { num: 9, name: 'Grimsby (N29)' },
    { num: 10, name: 'Birmingham (I30)' },
    { num: 11, name: 'Peterborough (M30)' },
    { num: 12, name: 'Ipswich (P35)' },
    { num: 13, name: 'Maidstone (O40)' },
    { num: 14, name: 'London (Optional) (M38)' },
    { num: 15, name: 'London (NE) (M38)' },
    { num: 16, name: 'London (NW) (M38)' },
    { num: 17, name: 'Southampton (J41)' },
    { num: 18, name: 'Bournemouth (I42)' },
    { num: 19, name: 'Cardiff (F35)' },
    { num: 20, name: 'Pontypool (F33)' },
    { num: 21, name: 'Merthyr Tydfil (E34)' },
    { num: 24, name: 'Swansea (D35)' },
  ];

  const minors: readonly string[] =
    minorCompanies.filter(c => c.num=== startMinor).concat(
      shuffle(minorCompanies.filter(c => c.num!== startMinor))
    ).map(({num, name}) => `M${num} - ${name}`);

  const starterPrivate: Company = { num: 1, name: 'permanent 5-train' };
  const privateCompanies: readonly Company[] = [
    { num: 2, name: 'remove small station' },
    { num: 3, name: 'permanent 2-train' },
    { num: 4, name: 'permanent 2-train' },
    { num: 5, name: 'token EC' },
    { num: 6, name: 'mail contract' },
    { num: 7, name: 'mail contract' },
    { num: 8, name: 'Hill/mountain' },
    { num: 9, name: 'double cash SR order / treasury' },
    { num: 10, name: 'estuary' },
    { num: 11, name: 'advanced track' },
    { num: 12, name: 'additional track' },
    { num: 13, name: 'Pullman' },
    { num: 14, name: 'Pullman' },
    { num: 15, name: '£10 / phase based payments' },
    { num: 16, name: 'tax haven' },
    { num: 17, name: 'adjust certificate order' },
    { num: 18, name: 'token exchange' },
  ];

  const privatesInPlay: readonly number[] = MODE_PRIVATES[mode];

  const privates: readonly string[] = [starterPrivate].concat(shuffle(
    privateCompanies.filter(c => privatesInPlay.includes(c.num))
  )).map(({num, name}) => `P${num} - ${name}`);

  const onClick: (m: string) => () => void = m => () => setMode(m);

  return <Layout>
    <h1>1822 (Medium Regional Scenario)</h1>

    <p>
      <button onClick={onClick('starter')}>Starter</button>
      <button onClick={onClick('standard')}>Standard</button>
      <button onClick={onClick('advanced')}>Advanced</button>
    </p>

    <h2>Selected Version: {mode}</h2>

    <OrderedList heading='Concessions' list={concessions} />
    <OrderedList heading='Minors' list={minors} />
    <OrderedList heading='Privates' list={privates} />
  </Layout>
};

export default Page;

