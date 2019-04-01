import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';

const IndexPage: React.SFC = () => (
  <Layout>
    <h1>Game Randomizers</h1>
    <ul>
      <li><Link to="/random/1822/">1822</Link></li>
      <li><Link to="/random/1822plus/">1822+</Link></li>
      <li><Link to="/random/1822ca/">1822CA</Link></li>
      <li><Link to="/random/1846/">1846</Link></li>
      <li><Link to="/random/1849/">1849</Link></li>
      <li><Link to="/random/1862ea/">1862: Railway Mania in Eastern Counties</Link></li>
      <li><Link to="/random/18ireland/">18Ireland</Link></li>
      <li><Link to="/random/18nw/">18NW: Railroading in the "Great Northwest"</Link></li>
    </ul>
  </Layout>
);

export default IndexPage;
