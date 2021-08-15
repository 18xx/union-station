import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Link } from 'gatsby';
import React, { SFC } from 'react';

type Props = {
  readonly icon?: JSX.Element;
  readonly primary: string;
  readonly to: string;
  readonly inset: boolean;
};

const ListItemLink: SFC<Props> = ({ icon, inset, primary, to }) => (
  <ListItem button={true} component={Link} to={to}>
    {icon && <ListItemIcon>{icon}</ListItemIcon>}
    <ListItemText inset={inset} primary={primary} />
  </ListItem>
);

export default ListItemLink;
