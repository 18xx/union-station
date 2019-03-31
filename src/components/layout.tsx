import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import Header from './header';
import './layout.css';

interface LayoutProps {
  readonly children: readonly JSX.Element[];
}

const renderFn: (
  children: readonly JSX.Element[]
) => (data: any) => JSX.Element = children => data => (
  <>
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <main>{children}</main>
      <footer />
    </div>
  </>
);

const Layout: React.SFC<LayoutProps> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={renderFn(children)}
  />
);

export default Layout;
