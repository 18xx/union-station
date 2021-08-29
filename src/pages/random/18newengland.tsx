import shuffle from 'lodash.shuffle';
import React from 'react';

import Layout from '../../components/layout';
import OrderedList from '../../components/ordered_list';

const companies: readonly string[] = shuffle([
  'AWS - Albany and West Stockbridge Railroad',
  'BL - Boston and Lowell Railroad',
  'BP - Boston and Providence Railroad',
  'CR - Connecticut River Railroad',
  'CV - Connecticut Valley Railroad',
  'ER - Eastern Railroad',
  'FRR - Fitchburg Railroad',
  'GR - Granite Railway',
  'HNH - Hartford and New Haven Railroad',
  'HRR - Hudson Railroad',
  'NLN - New London Northern Railroad',
  'NYNH - New York and New Haven Railroad',
  'NYW - New York, Westchester and Boston Railway',
  'PE - Poughkeepsie and Eastern Railway ',
  'WNR - Worcester, Nashua and Rochester Railroad',
]);

const Page: React.VFC = () => (
  <Layout>
    <h1>18NewEngland</h1>

    <OrderedList heading="Start" list={companies.slice(0, 10)} />
    <OrderedList heading="Phase 3" list={companies.slice(10, 15)} />
  </Layout>
);

export default Page;
