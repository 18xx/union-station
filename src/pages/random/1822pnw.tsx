import shuffle from 'lodash.shuffle';
import React from 'react';

import Layout from '../../components/layout';
import OrderedList from '../../components/ordered_list';

const Page: React.VFC = () => {
  const associatedMinors: readonly string[] = shuffle([
    'M1 Pacific Great Eastern Railway (CPR - Vancouver, BC - A8)',
    'M5 Idaho & Washington Northern Railway (GNR - Newport, WA - D23)',
    'M7 Spokane Falls and Northern Railway (CMPS - Spokane, WA - F23)',
    'M8 Puget Sound Shore Railroad (SWWR - Seattle, WA - H11)',
    'M17 Oregon Central Railroad (SPS - Portland, WA - O8)',
    'M18 Portland and Willamette Valley Railway (ORNC - Portland, WA - O8)',
    'M20 Walla Walla Valley Railway (NP - Walla Walla, WA - O20)',
  ]);

  const unassociatedMinors: readonly string[] = shuffle([
    'M2 Spokane & British Columbia Railway (Republic, WA - B19)',
    'M3 Bellingham Bay & British Columbia Railroad (Bellingham, WA - D11)',
    'M4 Brewster & Davenport Railroad (Brewster, WA - D19)',
    'M9 Wenatchee Valley Railroad (Leavenworth, WA - H19)',
    'M10 Tacoma, Olympia and Grays Harbor Railroad Company (Tacoma, WA - I12)',
    'M11 Aberdeen & Oakville Railroad (Aberdeen, WA - J5)',
    'M12 Connell Northern Railway Company (Sprague, WA - J23)',
    'M13 North Yakima Valley Railroad (Yakima, WA - L19)',
    'M14 Camas Prairie Railroad (Lewiston Junction, WA - L23)',
    'M15 Ilwaco Railroad Company (Ilwaco, WA - M4)',
    'M16 Astoria and Columbia River Railroad Company (Astoria, OR - N5)',
    'M19 Cascade Portage Railway (Stevenson, WA - O14)',
    'M21 The Great Southern Railroad (The Dalles, OR - P17)',
    'A Vancouver Regional Railway (Vancouver, WA - O10)',
    'B Tacoma Regional Railway (Tacoma, WA - I12)',
    'C Calgary Regional Railway (Calgary, AB - A22/B23)',
  ]);

  const minors: readonly string[] = [
    'M6 Port Townsend and Southern Railroad (Port Townsend, WA - F9)',
  ].concat(
    shuffle(
      associatedMinors.slice(0, 2).concat(unassociatedMinors.slice(0, 5))
    ),
    shuffle(
      associatedMinors.slice(2, 4).concat(unassociatedMinors.slice(5, 10))
    ),
    shuffle(associatedMinors.slice(4).concat(unassociatedMinors.slice(10)))
  );

  const privates: readonly string[] = ['P1 (permanent 5-train)'].concat(
    shuffle([
      'P2 (permanent 2-train)',
      'P3 (permanent L-train)',
      'P4 (permanent L-train)',
      'P5 (Pullman)',
      'P6 (Pullman)',
      'P7 (remove town)',
      'P8 (remove town)',
      'P9 (mail contract)',
      'P10 (builder cubes)',
      'P11 (extra tile lay)',
      'P12 (small port)',
      'P13 (large port)',
      'P14 (2x Timber)',
      'P15 (Paper Mill $10/$30 city revenue)',
      'P16 (Pacific Portage Company - special tile)',
      'P17 (Ski Haus - $30 route enhancement)',
      'P18 (Boom Town tile)',
      'P19 (Rockport Coal Mine tile)',
      'P20 (Backroom Negotiations - swam minor association)',
      'P21 (Credit Mobilier - move card / exchange token',
    ])
  );

  return (
    <Layout>
      <h1>1822 Pacific Northwest</h1>

      <OrderedList heading="Minors" list={minors} />
      <OrderedList heading="Privates" list={privates} />
    </Layout>
  );
};

export default Page;
