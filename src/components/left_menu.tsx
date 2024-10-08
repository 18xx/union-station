import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { DiceMultiple, Home } from 'mdi-material-ui';
import React, { useState } from 'react';

import ListItemLink from './list_item_link';

const randomGames: Record<string, string> = {
  '1822': '1822',
  '1822ca': '1822 CA',
  '1822mrs': '1822 MRS',
  '1822mx': '1822 MX',
  '1822plus': '1822+',
  '1822pnw': '1822PNW',
  '1828': '1828',
  '1846': '1846',
  '1849': '1849',
  '1862ea': '1862EA',
  '18ches': '18Chesapeake',
  '18ireland': '18Ireland',
  '18newengland': '18NewEngland',
  '18nw': '18NW',
};

const LeftMenu: React.VFC = () => {
  const [openRandomizers, setOpenRandomizers] = useState(false);

  const randomizersOnClick: () => void = () => {
    setOpenRandomizers(!openRandomizers);
  };

  return (
    <>
      <List>
        <ListItemLink primary="Home" to="/" icon={<Home />} inset={false} />

        <ListItem button={true} onClick={randomizersOnClick}>
          <ListItemIcon>
            <DiceMultiple />
          </ListItemIcon>
          <ListItemText primary="Game Randomizers" />
        </ListItem>
        <Collapse in={openRandomizers} timeout="auto" unmountOnExit={true}>
          <List>
            {Object.entries(randomGames).map((g) => (
              <ListItemLink
                to={`/random/${g[0]}/`}
                primary={g[1]}
                key={g[0]}
                inset={true}
              />
            ))}
          </List>
        </Collapse>
      </List>
    </>
  );
};

export default LeftMenu;
