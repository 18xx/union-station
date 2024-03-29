import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import sampleSize from 'lodash.samplesize';
import React, { ChangeEvent, useState } from 'react';

import Layout from '../../components/layout';
import OrderedList from '../../components/ordered_list';

const Page: React.VFC = () => {
  const [scenario, setScenario] = useState(5);

  const onChange: (event: ChangeEvent<unknown>, value: number) => void = (
    _,
    value
  ) => {
    setScenario(value);
  };

  const companies: readonly string[] = sampleSize(
    [
      'AFG - Azienda Ferroviaria Garibaldi',
      'ATA - Azienda Trasporti Archimede',
      'CTL - Compagnia Trasporti Lilibeo',
      'IFT - Impresa Ferroviaria Trinacria',
      'RCS - Rete Centrale Sicula',
      'SFA - Società Ferroviaria Akragas',
    ],
    scenario
  );

  return (
    <Layout>
      <h1>1849</h1>

      <Tabs value={scenario} onChange={onChange}>
        <Tab value={5} label="Scenario 5" />
        <Tab value={6} label="Scenario 6" />
      </Tabs>

      <OrderedList heading="Companies" list={companies} />
    </Layout>
  );
};

export default Page;
