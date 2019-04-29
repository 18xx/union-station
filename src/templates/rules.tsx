import library from '18xx-library';
import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Layout from '../components/layout';

interface PageContext {
  readonly game: Game;
}

interface Props {
  readonly pageContext: PageContext;
}

const render: (input: string | readonly object[]) => JSX.Element = (input) => {
  if (typeof input === 'string') {
    return <span>{input}</span>;
  }
  const keys = Object.keys(input[0]);

  return <Table>
    <TableHead>
      <TableRow>
        {keys.map(k => <TableCell key={k}>{k}</TableCell>)}
      </TableRow>
    </TableHead>
    <TableBody>
      {input.map(
        (i, idx) => <TableRow key={idx}>
          {Object.values(i).map(
            (x, xIdx) => <TableCell key={xIdx}>{x}</TableCell>
          )}
          </TableRow>
      )}
    </TableBody>
  </Table>
};

const Page: React.SFC<Props> = ({ pageContext }) => {
  const game = library.find(pageContext.game.name);
  if (!game) {
    return <p>Not Found</p>;
  }

  return (
    <Layout>
      <h1>{game.name}</h1>
      <dl>
      {Object.entries(game.rules()).map(pair => {
        return <div key={pair[0]}>
          <dt>{pair[0]}</dt>
          <dd>{render(pair[1])}</dd>
        </div>;
      })}
      </dl>
    </Layout>
  );
};

export default Page;
