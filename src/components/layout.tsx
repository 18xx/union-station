import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import Footer from './footer';
import Header from './header';
import './layout.css';

interface LayoutProps {
  readonly children: readonly JSX.Element[];
}

const renderFn: (
  children: readonly JSX.Element[]
) => (data: any) => JSX.Element = children => data => (
  <>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
    </Helmet>
    <div className='site-container'>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
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
