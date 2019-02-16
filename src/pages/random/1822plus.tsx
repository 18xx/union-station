import shuffle from 'lodash.shuffle';
import React from 'react';

import Layout from '../../components/layout';

const concessions: ReadonlyArray<string> = [
  'LNWR - London and North West Railway',
].concat(
  shuffle([
    'GWR - Great Western Railway',
    'LBSCR - London, Brighton and South Coast Railway',
    'SECR - South Eastern & Chatham Railway',
    'CR - Caledonian Railway',
    'MR - Midland Railway',
    'L&YR - Lancashire & Yorkshire',
    'NBR - North British Railway',
    'SWR - South Wales Railway',
    'NER - North Eastern Railway',
  ])
);

const minors: ReadonlyArray<string> = ['M24 - Swansea (D35)'].concat(
  shuffle([
    'M1 - Aberdeen (H1)',
    'M2 - Highlands (E2-4)',
    'M3 - Edinburgh (H5)',
    'M4 - Newcastle (K10)',
    'M5 - Darlington (J15)',
    'M6 - Barrow (G16)',
    'M7 - Warrington (H23)',
    'M8 - Sheffield (K24)',
    'M9 - Grimsby (N29)',
    'M10 - Birmingham (I30)',
    'M11 - Peterborough (M30)',
    'M12 - Ipswich (P35)',
    'M13 - Maidstone (O40)',
    'M14 - London (Optional) (M38)',
    'M15 - London (NE) (M38)',
    'M16 - London (NW) (M38)',
    'M17 - Southampton (J41)',
    'M18 - Bournemouth (I42)',
    'M19 - Cardiff (F35)',
    'M20 - Pontypool (F33)',
    'M21 - Merthyr Tydfil (E34)',
    'M22 - Exeter (D41)',
    'M23 - Plymouth (A42)',
    'M25 - Norwich (Q30)',
    'M26 - Hull (N21)',
    'M27 - Glasgow (E6)',
    'M28 - Carlisle (G12)',
    'M29 - Mid Wales (F28)',
    'M30 - Plymouth (B43)',
  ])
);

const privateBox1: ReadonlyArray<string> = ['P1 (permanent 5-train)'].concat(
  shuffle([
    'P3 (permanent 2-train)',
    'P4 (permanent 2-train)',
    'P13 (Pullman)',
    'P14 (Pullman)',
    'P19 (permanent L-train)',
  ])
);

const privateBox2: ReadonlyArray<string> = shuffle(
  ['P5 (token EC)'].concat(
    shuffle([
      'P2 (remove small station)',
      'P8 (Hill/mountain)',
      'P10 (estuary)',
      'P11 (advanced track)',
      'P12 (additional track)',
      'P21 (Humber bridge)',
    ]).slice(1)
  )
);

const privateBox3: ReadonlyArray<string> = shuffle(
  [
    'P6 (mail contract)',
    'P7 (mail contract)',
    'P9 (double cash SR order / treasury)',
  ].concat(
    shuffle([
      'P15 (£10 / phase based payments)',
      'P16 (tax haven)',
      'P17 (adjust certificate order)',
      'P18 (token exchange)',
      'P20 (£5 / phase based payments)',
    ]).slice(2)
  )
);

const listItems: (
  label: string,
  set: ReadonlyArray<string>
) => JSX.Element = (label, set) => {
  return <>
    <h3>{label}</h3>
    <ol>
      {set.map((str, idx) => <li key={idx}>{str}</li>)}
    </ol>
  </>;
}

const IndexPage: React.SFC = () => (
  <Layout>
    <h1>1822+</h1>

    {listItems('Concessions', concessions)}
    {listItems('Minors', minors)}
    {listItems('Private Box 1', privateBox1)}
    {listItems('Private Box 2', privateBox2)}
    {listItems('Private Box 3', privateBox3)}
  </Layout>
);

export default IndexPage;
