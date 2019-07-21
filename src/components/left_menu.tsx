import library from '18xx-library';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { DiceMultiple, FormatListBulleted, Home } from 'mdi-material-ui'
import React, { SFC, useState } from 'react';

import ListItemLink from './list_item_link';

const randomGames: Record<string, string> = {
  '1822': '1822',
  '1822ca': '1822 CA',
  '1822mrs': '1822 MRS',
  '1822mx': '1822 MX',
  '1822plus': '1822+',
  '1828': '1828',
  '1846': '1846',
  '1849': '1849',
  '1862ea': '1862EA',
  '18ches': '18Chesapeake',
  '18ireland': '18Ireland',
  '18nw': '18NW',
}

const LeftMenu: SFC = () => {
  const [openRandomizers, setOpenRandomizers] = useState(false);
  const [openRulesDiff, setOpenRulesDiff] = useState(false);

  const randomizersOnClick: () => void = () => {
    setOpenRandomizers(!openRandomizers);
  };

  const rulesDiffOnClick: () => void = () => {
    setOpenRulesDiff(!openRulesDiff);
  };

  return <>
    <List>
      <ListItemLink primary="Home" to="/" icon={<Home />} />

      <ListItem button={true} onClick={randomizersOnClick}>
        <ListItemIcon>
          <DiceMultiple />
        </ListItemIcon>
        <ListItemText primary="Game Randomizers" />
      </ListItem>
      <Collapse in={openRandomizers} timeout="auto" unmountOnExit={true}>
        <List>
          {Object.entries(randomGames).sort(
            (a, b) => a[0].localeCompare(b[0])
          ).map(
          g => <ListItemLink
            to={`/random/${g[0]}/`}
            primary={g[1]}
            key={g[0]} />
          )}
        </List>
      </Collapse>

      <ListItem button={true} onClick={rulesDiffOnClick}>
        <ListItemIcon>
          <FormatListBulleted />
        </ListItemIcon>
        <ListItemText primary="Rules Differences" />
      </ListItem>
      <Collapse in={openRulesDiff} timeout="auto" unmountOnExit={true}>
        <List>
          {library.all().map(
            game => {
              const link = game.name === '18??' ?
                '/rules/18-question-marks/' : `/rules/${game.name}/`;

              return <ListItemLink
                to={link}
                primary={game.name}
                key={game.name} />
            }
          )}
        </List>
      </Collapse>
    </List>
  </>
};

export default LeftMenu;
