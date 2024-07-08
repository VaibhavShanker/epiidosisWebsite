import PropTypes from 'prop-types';

const tabs = [
  'Renewable Energy',
  'Tourism & Hospitality',
  'Commercial',
  'Agriculture',
  'Industry',
  'Education',
  'Healthcare'
];

const SubNavbar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="flex justify-center border-b mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 font-medium ${selectedTab === tab ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
          onClick={() => setSelectedTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

SubNavbar.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  setSelectedTab: PropTypes.func.isRequired,
};

export default SubNavbar;
