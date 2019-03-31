import React from 'react';

import Layout from '../../components/layout';
import OrderedList from '../../components/ordered_list';

import sampleSize from 'lodash.samplesize';

const privates: readonly string[] = [
  'P1 - IRNC',
  'P2 - Mine',
  'P4 - Ferry',
  'P6 - Oil',
].concat(sampleSize([
  'P3a - Timber',
  'P3b - Steamboat',
  'P3c - Steamship',
], 1)).concat(sampleSize([
  'P5a - Port',
  'P5b - Shovel',
  'P5c - Tunnel',
], 1)).concat(sampleSize([
  'P7a - Kettle Valley',
  'P7b - Camas Prairie',
  'P7c - Kaslo & Slocan',
  'P7d - Tacoma & Eastern',
  'P7e - Oregon Short Line',
], 3)).sort();

const Page: React.SFC = () => {
  return (
    <Layout>
      <h1>18NW: Railroading in the "Great Northwest"</h1>

      <OrderedList heading="Private Companies" list={privates} />
    </Layout>
  );
}

export default Page;
