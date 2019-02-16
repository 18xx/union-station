import React from 'react';

interface OrderedListProps {
  readonly heading: string;
  readonly list: ReadonlyArray<string>;
}

const OrderedList: React.SFC<OrderedListProps> = ({ heading, list }) => (
  <>
    <h3>{heading}</h3>
    <ol>
      {list.map((str, idx) => <li key={idx}>{str}</li>)}
    </ol>
  </>
);

export default OrderedList
