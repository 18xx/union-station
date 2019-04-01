import sampleSize from 'lodash.samplesize';
import React from 'react';

import Layout from '../../components/layout';
import OrderedList from '../../components/ordered_list';

interface Private {
  readonly number: number;
  readonly name: string;
}

const Page: React.SFC = () => {
  const privates: readonly string[] = [
    { number: 1, name: 'Dalkey Atmospheric Railway (C: £20, R: £5)' },
    { number: 11, name: 'Dublin and Kingstown Railway (C: £110, R: £20)' },
  ].concat(sampleSize([
    { number: 2, name: 'Donegal Railway (C: £30, R: £7)' },
    { number: 3, name: 'Board of Works (C: £40, R: £9)' },
    { number: 4, name: 'City of Dublin Steam Packet Company (C: £45, R: £10)' },
    { number: 5, name: 'Tralee and Dingle Railway (C: £50, R: £10)' },
    { number: 6, name: 'Drumglass Colliery Railway (C: £60, R: £12)' },
    { number: 7, name: 'Trans-Atlantic Steam Packet Station (C: £75, R: £15)' },
    { number: 8, name: 'River Shannon Shipping Company (C: £80, R: £10)' },
    { number: 9, name: 'William Dargan Esq. (C: £90, R: £10)' },
    { number: 10, name: 'The Irish Mail (C: £110, R: £20)' },
  ], 3)).sort(
    (a: Private, b: Private) => a.number - b.number
  ).map(p => `P${p.number} - ${p.name}`);

  const companies: readonly string[] = [
    'DKR - Dublin & Kingstown Railway (Dublin, I11)',
  ].concat(sampleSize([
    'GNWR - Great Northern & Western Railway (Dromod, F10)',
    'WLR - Waterford & Limerick Railway (Limerick, D16)',
    'GJR - Grand Junction Railway (Sligo, D6)',
    'DDR - Dublin & Drogheda Railway (Dublin, I11)',
    'KJR - Kilkenny Junction Railway (Maryborough, G13)',
    'EBSR - Enniskillen, Bundoran & Sligo Railway (Enniskillen, F6)',
    'SLNCR - Sligo, Leitrim & Northern Counties Railway (Enniskillen, F6)',
    'UR - Ulster Railway (Belfast, J4)',
    'DER - Dundalk & Enniskillen Railway (Dundalk, I9)',
    'CIR - Central Ireland Railway (Maryborough, G13)',
    'LER - Londonderry & Enniskillen Railway (Londonderry, G1)',
    'CBPR - Cork, Blackrock & Passage Railway (Cork, E21)',
    'WKR - Waterford & Kilkenny Railway (Waterford, G19)',
  ], 12));

  return <Layout>
    <h1>18Ireland</h1>

    <OrderedList heading='Privates' list={privates} />
    <OrderedList heading='Companies' list={companies} />
  </Layout>
}

export default Page;
