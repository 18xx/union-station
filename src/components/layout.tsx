import CssBaseline from '@material-ui/core/CssBaseline';
import {
  createStyles,
  StyleRules,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import { ClassNameMap } from '@material-ui/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import Header from './header';

import 'typeface-roboto';

type LayoutProps = WithStyles & {
  readonly children: readonly JSX.Element[];
};

const styles = (): StyleRules<'body'> =>
  createStyles({
    body: {
      padding: '0 1rem',
    },
  });

type GqlResult = {
  readonly site: {
    readonly siteMetadata: {
      readonly title: string;
      readonly description: string;
    };
  };
};

const renderFn: (
  children: readonly JSX.Element[],
  classes: ClassNameMap<string>
) => (data: GqlResult) => JSX.Element = (children, classes) => {
  const mainSiteRender = (data: GqlResult): JSX.Element => (
    <>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1,
          initial-scale=1,
          width=device-width,
          shrink-to-fit=no"
        />
        <meta name="Description" content={data.site.siteMetadata.description} />
      </Helmet>
      <CssBaseline />
      <Typography component="div">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className={classes.body}>{children}</main>
      </Typography>
    </>
  );
  return mainSiteRender;
};

const Layout: React.SFC<LayoutProps> = ({ children, classes }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={renderFn(children, classes)}
  />
);

export default withStyles(styles)(Layout);
