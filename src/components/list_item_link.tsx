import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Link } from 'gatsby';
import React, { SFC } from 'react';

interface Props {
  readonly icon?: JSX.Element;
  readonly primary: string;
  readonly to: string;
}

const ListItemLink: SFC<Props> = ({ icon, primary, to }) => {
  return (
    <ListItem button={true} component={Link} to={to}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText inset={true} primary={primary} />
    </ListItem>
  );
};

export default ListItemLink;
