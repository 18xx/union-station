import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';

const IndexPage: React.SFC = () => (
  <Layout>
    <h1>Game Randomizers</h1>
    <Link to="/random/1822plus/">1822+</Link>
  </Layout>
);

export default IndexPage;
