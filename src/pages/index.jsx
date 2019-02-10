import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <h1>Game Randomizers</h1>
    <Link to="/random/1822plus/">1822+</Link>
  </Layout>
);

export default IndexPage;
