import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import {
  createStyles,
  StyleRules,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { GithubCircle } from 'mdi-material-ui';
import React, { SFC, useState } from 'react';

import LeftMenu from './left_menu';

interface Props extends WithStyles<typeof styles> {
  readonly siteTitle: string;
}

const styles: (theme: Theme) => StyleRules = theme =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    headerLink: {
      color: theme.palette.primary.contrastText,
      textDecoration: 'none',
    },
  });

const Header: SFC<Props> = ({ classes, siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onClose: () => void = () => setMenuOpen(false);
  const toggle: () => void = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={toggle} aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {siteTitle}
          </Typography>
          <a
            href="https://github.com/18xx/union-station"
            className={classes.headerLink}
          >
            <IconButton color="inherit" aria-label="GitHub Source">
              <GithubCircle />
            </IconButton>
          </a>
        </Toolbar>
      </AppBar>
      <Drawer open={menuOpen} onClose={onClose}>
        <LeftMenu />
      </Drawer>
    </header>
  );
};

export default withStyles(styles)(Header);
