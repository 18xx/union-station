import range from 'lodash.range';
import sampleSize from 'lodash.samplesize';
import React, { useState } from 'react';

import Layout from '../../components/layout';
import OrderedList from '../../components/ordered_list';

const Page: React.SFC = () => {
  const [scenario, setScenario] = useState(5);

  const onClick: (n: number) => () => void = n => () => setScenario(n);

  const ScenarioSelector: React.SFC = () => (
    <>
      {range(5, 7).map(n => (
        <button key={n} onClick={onClick(n)}>
          {n}
        </button>
      ))}
    </>
  );

  const companies: readonly string[] = sampleSize([
    "AFG - Azienda Ferroviaria Garibaldi",
    "ATA - Azienda Trasporti Archimede",
    "CTL - Compagnia Trasporti Lilibeo",
    "IFT - Impresa Ferroviaria Trinacria",
    "RCS - Rete Centrale Sicula",
    "SFA - Società Ferroviaria Akragas",
  ], scenario);

  return <Layout>
    <h1>1849</h1>
    <p>
      <h3>Choose Scenario</h3>
      <ScenarioSelector />
    </p>
    <br />

    <h2>Scenario {scenario}</h2>

    <OrderedList heading='Companies' list={companies} />
  </Layout>
}

export default Page;
