import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <h1>Welcome</h1>
    <p>Now go build something great.</p>
    <Link to="/random/1822plus/">1822+</Link>
  </Layout>
);

export default IndexPage;
