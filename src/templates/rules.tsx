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

const render: (
  input: boolean | string | readonly object[]
) => JSX.Element = (input) => {
  if (typeof input === 'string') {
    return <span>{input}</span>;
  }
  if (typeof input === 'boolean') {
    return <span>{input.toString()}</span>;
  }

  const keys = new Set<string>();
  input.forEach(i => Object.keys(i).forEach(k => keys.add(k)));
  const keyArray = Array.from(keys).sort();

  return <Table>
    <TableHead>
      <TableRow>
        {keyArray.map((k => <TableCell key={k}><span>{k}</span></TableCell>))}
      </TableRow>
    </TableHead>
    <TableBody>
      {input.map(
        (i: any, idx) => <TableRow key={idx}>
          {keyArray.map(
            (k, kIdx) => <TableCell key={kIdx}><span>{i[k]}</span></TableCell>
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
        return <div key={pair[0]} style={{ marginBottom: '1em' }}>
          <dt style={{ fontWeight: 'bold' }}>{pair[0]}</dt>
          <dd>{render(pair[1])}</dd>
        </div>;
      })}
      </dl>
    </Layout>
  );
};

export default Page;
