import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';

const IndexPage: React.SFC = () => (
  <Layout>
    <h1>Game Randomizers</h1>
    <ul>
      <li><Link to="/random/1822/">1822</Link></li>
      <li><Link to="/random/1822plus/">1822+</Link></li>
    </ul>
  </Layout>
);

export default IndexPage;
