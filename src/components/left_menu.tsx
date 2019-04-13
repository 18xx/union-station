import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Link } from 'gatsby';
import React, { SFC } from 'react';

const games: Record<string, string> = {
  '1822': '1822',
  '1822ca': '1822 CA',
  '1822mrs': '1822 MRS',
  '1822plus': '1822+',
  '1828': '1828',
  '1846': '1846',
  '1849': '1849',
  '1862ea': '1862EA',
  '18ireland': '18Ireland',
  '18nw': '18NW',
}

const LeftMenu: SFC = () => (
  <>
    <List subheader={<ListSubheader>Game Randomizers</ListSubheader>}>
      {Object.entries(games).sort(
        (a, b) => a[0].localeCompare(b[0])
      ).map(
        g => <ListItem key={g[0]}>
          <Link to={`/random/${g[0]}/`}>
            <ListItemText primary={g[1]} />
          </Link>
        </ListItem>
      )}
    </List>
  </>
);

export default LeftMenu;
