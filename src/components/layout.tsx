import CssBaseline from '@material-ui/core/CssBaseline';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import Header from './header';

import 'typeface-roboto';

interface LayoutProps extends WithStyles<typeof styles> {
  readonly children: readonly JSX.Element[];
}

const styles: any = () =>
  createStyles({
    body: {
      padding: '0 1rem',
    },
  });

const renderFn: (
  children: readonly JSX.Element[],
  classes: typeof styles
) => (data: any) => JSX.Element = (children, classes) => (
  data
): JSX.Element => (
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
