import { useState } from 'react';
import SubNavbar from '../../ui/SubNavbar';
import TabContent from '../../ui/TabContent ';

const HomeOption = () => {
  const [selectedTab, setSelectedTab] = useState('Renewable Energy');

  return (
    <div >
      <div className="container mx-auto mt-6">
      <SubNavbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
   
      <TabContent selectedTab={selectedTab} />
    </div>
  );
};

export default HomeOption;
