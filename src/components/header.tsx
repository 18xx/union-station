import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { GithubCircle } from 'mdi-material-ui'

import { Link } from 'gatsby';
import React from 'react';

interface Props extends WithStyles<typeof styles> {
  readonly siteTitle: string;
}

const styles = (theme: Theme) => {
  return createStyles({
    grow: {
      flexGrow: 1,
    },
    headerLink: {
      color: theme.palette.primary.contrastText,
      textDecoration: 'none',
    }
  });
};

const Header: React.SFC<Props> = ({ classes, siteTitle }) => {
  return <header>
    <AppBar position="static">
      <Toolbar>
	<Typography variant="h6" color="inherit" className={classes.grow}>
	  <Link to="/" className={classes.headerLink}>{siteTitle}</Link>
	</Typography>
	<a href='https://github.com/18xx/union-station' className={classes.headerLink}>
	  <IconButton color='inherit'>
	    <GithubCircle />
	  </IconButton>
	</a>
      </Toolbar>
    </AppBar>
  </header>
};

export default withStyles(styles)(Header)
